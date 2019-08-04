const path = require('path')
const glob = require('glob')
const PAGES_PATH = './src/pages'

const appData = require('./data.json')
const seller = appData.seller

function resolve (dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  css: {
    loaderOptions: {
      stylus: {
        'resolve url': true,
        'import': [
          './src/theme'
        ]
      }
    }
  },
  pluginOptions: {
    'cube-ui': {
      postCompile: true,
      theme: true
    }
  },
  devServer: {
    before (app) {
      app.get('/api/seller', function (req, res) {
        res.json({
          errno: 0,
          data: seller
        })
      })
    }
  },
  productionSourceMap: false,
  publicPath: './',
  chainWebpack (config) {
    config.resolve.alias
      .set('main', resolve('src/main'))
      .set('pages', resolve('src/pages'))
      .set('components', resolve('src/components'))
      .set('common', resolve('src/common'))
      .set('api', resolve('src/api/index'))
  },
  pages: getPages()
}

function getPages () {
  let entries = glob.sync(PAGES_PATH + '/*/*.js')
  let pages = {}
  entries.forEach(filePath => {
    const dirname = path.dirname(filePath)
    let fileName = dirname.substr(dirname.lastIndexOf('/') + 1)
    pages[fileName] = {
      entry: `src/pages/${fileName}/index.js`,
      template: 'public/index.html',
      filename: `${fileName}.html`
    }
  })
  return pages
}
