const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const PATHS = {
  app: path.join(__dirname, 'client','scripts'),
  build: path.join(__dirname, 'build')
};

module.exports = {
  entry: {
    app: PATHS.app
  },
  output: {
    path: PATHS.build,
    filename: 'bundle.js'
  },
  module: {
        loaders: [
          {test: /\.css?$/, loader: ExtractTextPlugin.extract('style-loader','css-loader')},
          {test: /\.(png|jpg)$/, loader: 'file-loader?name=images/[name].[ext]'}
        ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: __dirname + '/client/index.html',
      filename: 'index.html',
      inject: 'body'
    }),
    new ExtractTextPlugin(
        'bundle.css'
    )
  ]
};
