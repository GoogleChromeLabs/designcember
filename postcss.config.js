const postcssJitProps = require('postcss-jit-props')
const postcssNesting = require('postcss-nesting')
const postcssImport = require('postcss-import')
const postcssCQFill = require('cqfill/postcss')

const OpenProps = require('@argyleink/open-props')

module.exports = {
  plugins: [
    postcssImport({ path: ['src'] }),
    postcssJitProps(OpenProps),
    postcssNesting(),
    postcssCQFill(),
  ],
}
