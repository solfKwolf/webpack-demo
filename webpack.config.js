module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    // publicPath: '/dist/'
  },
  devServer: {
    contentBase: './public',
    publicPath: '/dist',  // 这个就不需要了,自动帮你引入好像 ./dist 跟 /dist 有很大区别
  },
}