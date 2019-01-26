const path = require('path');
var ngAnnotatePlugin = require('ng-annotate-webpack-plugin');


module.exports = {
  entry: {
    'main': './src/index.js',
    'vendor': [
      'angular',
      'bootstrap'
    ]
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
      new ngAnnotatePlugin({
          add: true
      })
  ],
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
 }
};
