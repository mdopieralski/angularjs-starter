'use strict';

import LiveReloadPlugin from 'webpack-livereload-plugin';
import Webpack from 'webpack';
import autoprefixer from 'autoprefixer';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

const USE_CONFIG = JSON.stringify(process.env.USE_CONFIG) || 'build';
const IS_BUILD = process.argv.indexOf('--build') !== -1;
const IS_TEST = USE_CONFIG.indexOf('test') > -1;

if (!IS_BUILD && !IS_TEST) {

  var Dashboard = require('webpack-dashboard');
  var DashboardPlugin = require('webpack-dashboard/plugin');
}

const CONFIG = {
  // devtool: 'source-map',
  port: 8080,
  context: __dirname + '/src',
  entry: './index.js',
  output: {
    path: __dirname + (IS_BUILD ? '/dist/assets' : '/src'),
    filename: 'bundle.js',
    publicPath: IS_BUILD ? '/assets/' : '/',
  },
  resolve: {
    extensions: ['', '.json', '.jsx', '.js']
  },
  plugins: [
    new Webpack.DefinePlugin({
      'process.env.PRODUCTION': IS_BUILD,
      'process.env.DEVELOPMENT': !IS_BUILD,
      'process.env.USE_CONFIG': USE_CONFIG,
      'process.env.IS_TEST': IS_TEST
    }),
    new ExtractTextPlugin('bundle.css'),
    new Webpack.ProvidePlugin({
      moment: 'moment',
      $: 'jquery',
      jQuery: 'jquery',
      ZeroClipboard: 'zeroclipboard'
    }),
    new HtmlWebpackPlugin({
      template: './index.ejs',
      filename: IS_BUILD ? '../index.html' : 'index.html',
      IS_BUILD: IS_BUILD,
      E2E_TEST: false
    })
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /(node_modules|vendor)/,
      loaders: ['ng-annotate', 'babel-loader'],
    }, {
      test: /\.html$/,
      loader: 'raw!html-minify'
    }, {
      test: /\.less$/,
      loader: ExtractTextPlugin.extract('style', 'css!postcss!less')
    }, {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract('style', 'css')
    }, {
      test: /\.((woff2?|svg)(\?v=[0-9]\.[0-9]\.[0-9]))|(woff2?|svg|jpe?g|png|gif|ico)$/,
      loader: 'url',
      exclude: /(img)/,
    }, {
      test: /\.((ttf|otf|eot)(\?v=[0-9]\.[0-9]\.[0-9]))|(ttf|otf|eot)$/,
      loader: 'file'
    }, {
      include: /\.json$/,
      loader: 'json'
    }]
  },
  'html-minify-loader': {
    empty: true,
    cdata: true,
    comments: false,
  },
  postcss() {
    return [
      autoprefixer
    ];
  }
};

switch (IS_BUILD) {

  case true:

    CONFIG.plugins.push(

      new Webpack.optimize.UglifyJsPlugin({
        minimize: true,
        compress: true,
        comments: false
      })
    );
    break;

  case false:

    if (!IS_TEST) {

      var dashboard = new Dashboard();
      CONFIG.plugins.push(new DashboardPlugin(dashboard.setData));
      CONFIG.plugins.push(new LiveReloadPlugin());
    }
    break;
}

export default CONFIG;
