const webpack = require('webpack')
const path = require('path')
const express = require('express')
const app = express()
const CompressionPlugin = require("compression-webpack-plugin")
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

const NODE_ENV = process.env.NODE_ENV
const NODE_PORT = process.env.NODE_PORT


if (NODE_ENV === 'DEV') {
  // create server
  app.use(express.static(__dirname))

  // // 404
  app.use(function (req, res, next) {
    res.status(404).redirect(`http://localhost:${NODE_PORT}?p=${req.originalUrl}`)
    next()
  })

  app.listen(parseInt(NODE_PORT))
}


module.exports = {
  entry: './src/entry.js',
  output: {
    path: __dirname,
    filename: 'public/bundle.js'
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
  plugins: NODE_ENV === 'PROD' ?
    [
      // new CompressionPlugin({
      //   asset: "[path].gz[query]",
      //   algorithm: "gzip",
      //   test: /\.(js)$/,
      //   threshold: 10240,
      //   minRatio: 0.8
      // }),
      // new UglifyJSPlugin({
      //   compress: { warnings: false }
      // })
      new BundleAnalyzerPlugin()
    ]
    : [
      new BundleAnalyzerPlugin()
    ]
}
