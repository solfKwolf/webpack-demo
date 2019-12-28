//  自定义插件
function HelloWorldPlugin(options) {
  // 使用 options 设置插件实例……
}

HelloWorldPlugin.prototype.apply = function(compiler) {
  compiler.plugin('done', function() {
    console.log('Hello World!');
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
    new HelloWorldPlugin({options: true})
  ]
}