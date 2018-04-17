var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './index.js',
  output: {
    path: __dirname + '/public',
    publicPath: '/public',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /(node_modules|public)/
      },
      {
        test : /.css?$/,
        loader: 'style-loader!css-loader',
        exclude: /(node_modules)/
      }
    ]
  }
  // plugins: [
  //   new HtmlWebpackPlugin({
  //     template: '.public/index.html',
  //     inject: "body"
  //   })
  // ]
};