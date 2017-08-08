var webpack = require('webpack');
var path = require('path');
var express = require('express');
var app = express()
var NODE_ENV = process.env.NODE_ENV
var NODE_PORT = process.env.NODE_PORT

var plugins = [];
if (NODE_ENV === 'PROD') {
  // add plugins
  // plugins.push(new webpack.optimize.CommonsChunkPlugin('vendor.js'));
  // plugins.push(new webpack.optimize.UglifyJsPlugin());
}

if (NODE_ENV === 'DEV') {
  // create server
  app.use(express.static(__dirname))
  app.listen(parseInt(NODE_PORT))
}


module.exports = {
  entry: './src/entry.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.js.*/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['es2015', 'stage-2', 'react']
            }
          }
        ]
      }, {
        test: /\.css?/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          }
        ]
      }, {
        test: /\.scss?/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'style-loader'
          }, {
            loader: 'css-loader'
          }, {
            loader: "sass-loader"
          }
        ]
      }
    ]
  },
  resolve: {
    alias: {
      blogData: path.resolve(__dirname, 'data/index.js')
    }
  },
  plugins: plugins
}
