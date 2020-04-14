const px2rem = require('postcss-px2rem')

const postcss = px2rem({
  remUnit: 75   // remUnit的值 === 设计稿 / 10   设计稿宽750px
})
module.exports = {
  lintOnSave: false, // 关闭EsLint语法检查
  // css: {
  //   loaderOptions: {
  //     postcss: {
  //       plugins: [
  //         postcss
  //       ]
  //     }
  //   }
  // }
}
