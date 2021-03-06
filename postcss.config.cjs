const postcssJitProps = require('postcss-jit-props')
const postcssNesting = require('postcss-nesting')
const postcssCustomMedia = require('postcss-custom-media')
const postcssMediaRanges = require('postcss-media-minmax')
const postcssImport = require('postcss-import')
// const OpenProps = require('open-props')

module.exports = {
  plugins: [
    postcssImport({ path: ['src'] }),
    postcssCustomMedia({
      importFrom: [
        {
          customMedia: {
            '--sm': '(width >= 600px)',
            '--md': '(width >= 1024px)',
            '--lg': '(width >= 1680px)',
            '--motionOK': '(prefers-reduced-motion: no-preference)',
            '--dark': '(prefers-color-scheme: dark)',
            '--light': '(prefers-color-scheme: light)',
          }
        }
      ]
    }),
    postcssMediaRanges(),
    // postcssJitProps(OpenProps),
    postcssNesting(),
  ],
}
