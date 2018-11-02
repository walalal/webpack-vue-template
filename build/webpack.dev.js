const path = require('path')
const merge = require('webpack-merge')
const common = require('./webpack.base.js')

module.exports = merge(common, {
  module: {
    rules: []
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.resolve(__dirname, '../dist')
  },
  mode: 'development',
  plugins: [],
  output: {
    filename: 'js/[name].[hash].js',
    path: path.resolve(__dirname, '../dist')
  }
})
