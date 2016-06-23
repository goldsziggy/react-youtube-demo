const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'cheap-module-source-map',
  entry: [
    'app.js',
  ],
  output: {
    path: path.resolve('build'),
    filename: 'bundle.js',
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: [/node_modules/, /build/],
      loaders: ['react-hot', 'babel'],
    }, {
      test: /\.scss$/,
      loader: ExtractTextPlugin.extract(['css', 'sass']),
    }, {
      test: /\.(png|jpg|svg)$/,
      loader: 'file-loader',
    }],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env':{
        'NODE_ENV': JSON.stringify('production'),
      },
    }),
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new ExtractTextPlugin('styles.css'),
    new HtmlWebpackPlugin({
      filename: 'index.html',
    }),
  ],
  resolve: {
    modulesDirectories: [
      'src',
      'node_modules',
    ],
    alias: {
      'helpers': path.join(__dirname, '../tests/helpers/'),
      'src': path.join(__dirname, '../src/'),
      'components': path.join(__dirname, '../src/components/'),
    },
  },
};