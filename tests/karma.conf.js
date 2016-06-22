const webpack = require('webpack');
const path = require('path');

module.exports = (config) => {
  config.set({

    browsers: ['PhantomJS'],

    singleRun: !!process.env.CI,

    frameworks: ['mocha'],

    files: [
      '../node_modules/phantomjs-polyfill/bind-polyfill.js',
      'tests.webpack.js',
    ],

    preprocessors: {
      'tests.webpack.js': ['webpack', 'sourcemap'],
    },

    reporters: ['mocha'],

    plugins: [
      require('karma-webpack'),
      require('karma-mocha'),
      require('karma-mocha-reporter'),
      require('karma-phantomjs-launcher'),
      require('karma-sourcemap-loader'),
    ],
    
    webpack: {
      devtool: 'inline-source-map',
      module: {
        loaders: [{
          test: /\.js$/,
          exclude: /node_modules/,
          loaders: ['babel'],
        }, {
          test: /\.scss$/,
          loaders: ['css', 'sass'],
        }, {
          test: /\.(png|jpg|svg)$/,
          loader: 'file-loader',
          exclude: /node_modules/,
        }],
      },
      resolve: {
        modulesDirectories: [
          'src',
          'node_modules',
        ],
        alias: {
          'helpers': path.join(__dirname, '../tests/helpers/'),
          'src': path.join(__dirname, '../src/'),
        },
      },
      plugins: [
        new webpack.IgnorePlugin(/\.json$/),
        new webpack.NoErrorsPlugin(),
        new webpack.DefinePlugin({
          __DEVTOOLS__: false, 
        }),
      ],
    },
    webpackServer: {
      noInfo: true,
    },
  });
};
