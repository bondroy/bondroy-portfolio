const fs = require('fs')

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
    return value
    // return 'https://i2.wp.com/bondroy-site.loudnow.vercel.app' + value
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
