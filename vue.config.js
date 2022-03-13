const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // pages: {
  //   index: {
  //     entry: 'src/main.js',
  //     template: 'public/index.html',
  //     filename: 'index.html'
  //   }
  // },
  // css: {
  //   extract: false   //强制使用内联样式，这样打包出的插件样式会内置在js中，不需要单独引入
  // }
})
