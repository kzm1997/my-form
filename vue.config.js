const { defineConfig } = require('@vue/cli-service')
const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}


module.exports = defineConfig({
  transpileDependencies: true,

  // 生产环境不生成 source map
  productionSourceMap: false,


  // 静态资源相对路径
  publicPath: './',

  chainWebpack: config => {
    config.resolve.alias
        .set('@', resolve('src'))
        .set('~', resolve('src'))          // 👈 如果你确实要支持 ~
        .set('assets', resolve('src/assets'))
        .set('components', resolve('src/components'))
        .set('elements', resolve('src/elements'))
        .set('store', resolve('src/store'))
        .set('utils', resolve('src/utils'))
  },
})


