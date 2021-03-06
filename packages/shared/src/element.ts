const HTMLTagSet = new Set([
  'html',
  'body',
  'base',
  'head',
  'link',
  'meta',
  'style',
  'title',
  'address',
  'article',
  'aside',
  'footer',
  'header',
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'hgroup',
  'nav',
  'section',
  'div',
  'dd',
  'dl',
  'dt',
  'figcaption',
  'figure',
  'picture',
  'hr',
  'img',
  'li',
  'main',
  'ol',
  'p',
  'pre',
  'ul',
  'a',
  'b',
  'abbr',
  'bdi',
  'bdo',
  'br',
  'cite',
  'code',
  'data',
  'dfn',
  'em',
  'i',
  'kbd',
  'mark',
  'q',
  'rp',
  'rt',
  'rtc',
  'ruby',
  's',
  'samp',
  'small',
  'span',
  'strong',
  'sub',
  'sup',
  'time',
  'u',
  'var',
  'wbr',
  'area',
  'audio',
  'map',
  'track',
  'video',
  'embed',
  'object',
  'param',
  'source',
  'canvas',
  'script',
  'noscript',
  'del',
  'ins',
  'caption',
  'col',
  'colgroup',
  'table',
  'thead',
  'tbody',
  'td',
  'th',
  'tr',
  'button',
  'datalist',
  'fieldset',
  'form',
  'input',
  'label',
  'legend',
  'meter',
  'optgroup',
  'option',
  'output',
  'progress',
  'select',
  'textarea',
  'details',
  'dialog',
  'menu',
  'menuitem',
  'summary',
  'content',
  'element',
  'shadow',
  'template',
  'blockquote',
  'iframe',
  'tfoot'
])

/**
 * this list is intentionally selective, only covering SVG elements that may
 * contain child elements.
 */
const SVGTagSet = new Set([
  'svg',
  'animate',
  'circle',
  'clippath',
  'cursor',
  'defs',
  'desc',
  'ellipse',
  'filter',
  'font-face',
  'foreignObject',
  'g',
  'glyph',
  'image',
  'line',
  'marker',
  'mask',
  'missing-glyph',
  'path',
  'pattern',
  'polygon',
  'polyline',
  'rect',
  'switch',
  'symbol',
  'text',
  'textpath',
  'tspan',
  'use',
  'view'
])

const VoidTagSet = new Set([
  'area',
  'base',
  'br',
  'col',
  'embed',
  'hr',
  'img',
  'input',
  'link',
  'meta',
  'param',
  'source',
  'track',
  'wbr'
])

export const isVoidTag = (tag: string) => VoidTagSet.has(tag)
export const isHTMLTag = (tag: string) => HTMLTagSet.has(tag)
export const isSVGTag = (tag: string) => SVGTagSet.has(tag)
