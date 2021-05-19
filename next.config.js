const withMDX = require('@next/mdx')({
  extension: /\.mdx$/
})

module.exports = withMDX({
  images: {
    domains: ['localhost', 'media.graphcms.com'],
    pageExtensions: ['js', 'jsx', 'md', 'mdx']
  },
});