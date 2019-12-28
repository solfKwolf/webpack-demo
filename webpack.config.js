//  自定义插件
function HelloCompilationPlugin(options) {}

HelloCompilationPlugin.prototype.apply = function(compiler) {

  // 设置回调来访问 compilation 对象：
  compiler.plugin("compilation", function(compilation) {

    // 现在，设置回调来访问 compilation 中的步骤：
    compilation.plugin("optimize", function() {
      console.log("Assets are being optimized.");
    });
  });
};


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
  plugins: [
    new HelloCompilationPlugin({options: true})
  ]
}