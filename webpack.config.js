const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ngAnnotatePlugin = require('ng-annotate-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: {
    'vendor': [
      'angular',
      'angular-route',
      'bootstrap',
      'lodash',
      'angular-drag-and-drop-lists'
    ],
    'main': './src/index.js'
  },
  output: {
    filename: '[name].bundle.[contenthash].js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
   rules: [
     {
       test: /\.css$/,
       use: [
         'style-loader',
         'css-loader'
       ]
     },
     {
        test: /\.(html)$/,
        use: {
          loader: 'html-loader',
          options: {
            attrs: [':data-src']
          }
        }
      }
   ]
 },
 devtool: 'eval-source-map',
 plugins: [
     new ngAnnotatePlugin({
         add: true
     }),
     new HtmlWebpackPlugin({
       template: 'src/template.html',
       inject: 'body',
       filename: '../index.html'
     }),
     new CleanWebpackPlugin(['dist'],{watch: true}),
 ]
};
