const fs = require('fs')
const path = require('path')
const Image = require('@11ty/eleventy-img')
const sizeOf = require('image-size')

module.exports = (config) => {
  config.addPassthroughCopy({ public: './' })
  config.addPassthroughCopy('css')
  config.addPassthroughCopy('js')

  let required = {}
  config.on('beforeBuild', () => { required =  {} })

  config.addShortcode('require_once', function(path) {
    const slug = this.page.outputPath
    required[slug] = required[slug] || []
    if (required[slug].includes(path.val)) return ''
    required[slug].push(path.val)
    return fs.readFileSync(`${process.cwd()}/src/_includes/${path}`, 'utf8')
  })

  config.addFilter('proton', function(value) {
    // return value
    return 'https://i2.wp.com/bondroy-site.loudnow.vercel.app' + value
  })

  config.addFilter('imgWidth', (imgPath) => {
    const dimensions = sizeOf(path.resolve(`${process.cwd()}/public/${imgPath}`));
    return dimensions.width
  })

  config.addFilter('imgHeight', (imgPath) => {
    const dimensions = sizeOf(path.resolve(`${process.cwd()}/public/${imgPath}`));
    return dimensions.height
  })

  config.setBrowserSyncConfig({
    files: ['dist/**/*'],
    open: true,
  })

  config.setDataDeepMerge(true)

  return {
    htmlTemplateEngine: 'njk',
    dir: {
      input: 'src',
      output: 'dist',
    },
  }
}
