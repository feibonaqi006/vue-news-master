// 导入compression-webpack-plugin
const CompressionWebpackPlugin = require('compression-webpack-plugin');

module.exports = {
  publicPath: "./",
  assetsDir: "static",
  outputDir: 'dist',
  productionSourceMap: false,
  // 图片压缩
  chainWebpack: config => {
    config.module
      .rule('images')
      .use('image-webpack-loader')
      .loader('image-webpack-loader')
      .options({ bypassOnDebug: true })
      .end()
  },
  // 统一配置打包插件
  configureWebpack: config => {
      // gzip压缩
      const productionGzipExtensions = ['html', 'js', 'css']
      config.plugins.push(
      new CompressionWebpackPlugin({
        filename: '[path].gz[query]',
        algorithm: 'gzip',
        test: new RegExp('\\.(' + productionGzipExtensions.join('|') + ')$'),// 匹配文件名
        threshold: 10240,// 对10K以上的数据进行压缩
        minRatio: 0.8,
        deleteOriginalAssets:false,// 是否删除源文件
      })
    )
  }
}
