const postcssJitProps = require('postcss-jit-props')
const postcssNesting = require('postcss-nesting')
const postcssCustomMedia = require('postcss-custom-media')
const postcssMediaRanges = require('postcss-media-minmax')
const postcssImport = require('postcss-import')
const postcssCQFill = require('cqfill/postcss')

const OpenProps = require('@argyleink/open-props')

module.exports = {
  plugins: [
    postcssImport({ path: ['src'] }),
    postcssCustomMedia(),
    postcssMediaRanges(),
    postcssJitProps(OpenProps),
    postcssNesting(),
    postcssCQFill(),
  ],
}
