const fs = require('fs')

const required = {}

module.exports = (config) => {
  config.addPassthroughCopy({ public: './' })

  config.addShortcode('require_once', function(slug, path) {
    required[slug] = required[slug] || []

    if (required[slug].includes(path)) return ''

    required[slug].push(path)
    return fs.readFileSync(`${process.cwd()}/src/_includes/${path}`, 'utf8')
  })

  config.setBrowserSyncConfig({
    files: ['dist/**/*'],
    open: true,
  })

  config.setDataDeepMerge(true)

  return {
    dir: {
      input: 'src',
      output: 'dist',
    },
  }
}
