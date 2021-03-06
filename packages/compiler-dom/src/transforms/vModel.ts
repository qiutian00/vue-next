import {
  transformModel as baseTransform,
  DirectiveTransform,
  ElementTypes,
  findProp,
  NodeTypes
} from '@vue/compiler-core'
import { createDOMCompilerError, DOMErrorCodes } from '../errors'
import {
  V_MODEL_CHECKBOX,
  V_MODEL_RADIO,
  V_MODEL_SELECT,
  V_MODEL_TEXT,
  V_MODEL_DYNAMIC
} from '../runtimeHelpers'

export const transformModel: DirectiveTransform = (dir, node, context) => {
  const res = baseTransform(dir, node, context)
  const { tag, tagType } = node
  if (tagType === ElementTypes.ELEMENT) {
    if (dir.arg) {
      context.onError(
        createDOMCompilerError(
          DOMErrorCodes.X_V_MODEL_ARG_ON_ELEMENT,
          dir.arg.loc
        )
      )
    }

    if (tag === 'input' || tag === 'textarea' || tag === 'select') {
      let directiveToUse = V_MODEL_TEXT
      if (tag === 'input') {
        const type = findProp(node, `type`)
        if (type) {
          if (type.type === NodeTypes.DIRECTIVE) {
            // :type="foo"
            directiveToUse = V_MODEL_DYNAMIC
          } else if (type.value) {
            switch (type.value.content) {
              case 'radio':
                directiveToUse = V_MODEL_RADIO
                break
              case 'checkbox':
                directiveToUse = V_MODEL_CHECKBOX
                break
            }
          }
        }
      } else if (tag === 'select') {
        directiveToUse = V_MODEL_SELECT
      }
      // inject runtime directive
      // by returning the helper symbol via needRuntime
      // the import will replaced a resovleDirective call.
      res.needRuntime = context.helper(directiveToUse)
    } else {
      context.onError(
        createDOMCompilerError(
          DOMErrorCodes.X_V_MODEL_ON_INVALID_ELEMENT,
          dir.loc
        )
      )
    }
  }
  return res
}
