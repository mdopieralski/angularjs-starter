'use strict';

const Webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const USE_CONFIG = process.env.USE_CONFIG || 'local';
const IS_BUILD = process.env.BUILD === 'true';
const IS_TEST = process.env.TEST === 'true';

const CONFIG = {
    // devtool: 'source-map',
    context: __dirname + '/src',
    entry: './index.js',
    output: {
        path: __dirname + (IS_BUILD ? '/dist/assets' : '/src'),
        filename: 'bundle.js',
        publicPath: IS_BUILD ? '/assets/' : '/',
    },
    resolve: {

        extensions: ['.json', '.jsx', '.js']
    },
    plugins: [
        new Webpack.DefinePlugin({
            'process.env': {
                PRODUCTION: (USE_CONFIG === 'production'),
                DEVELOPMENT: !IS_BUILD,
                USE_CONFIG: JSON.stringify(USE_CONFIG),
                IS_TEST: IS_TEST
            }
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
        }),
        new Webpack.LoaderOptionsPlugin({
            options: {
                postcss: [autoprefixer],
                'html-minify-loader': {
                    empty: true,
                    cdata: true,
                    comments: false,
                    dom: {
                        lowerCaseAttributeNames: false,
                    }
                },
            }
        }),
    ],
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /(node_modules|vendor|\*.spec.js)/,
            loaders: ['ng-annotate-loader', 'babel-loader'],
        }, {
            test: /\.html$/,
            loaders: ['raw-loader', 'html-minify-loader']
        }, {
            test: /\.less$/,
            loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader!postcss-loader!less-loader' })
        }, {
            test: /\.css$/,
            loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader' })
        }, {
            test: /\.((woff2?|svg)(\?v=[0-9]\.[0-9]\.[0-9]))|(woff2?|svg|jpe?g|png|gif|ico)$/,
            loaders: ['url-loader'],
            exclude: /(img)/,
        }, {
            test: /\.((ttf|otf|eot)(\?v=[0-9]\.[0-9]\.[0-9]))|(ttf|otf|eot)$/,
            loaders: ['file-loader']
        }, {
            include: /\.json$/,
            loaders: ['json-loader']
        }]
    },
    devServer: {
        port: 8080,
        host: 'localhost',
        historyApiFallback: true,
        watchOptions: {
            aggregateTimeout: 300,
            poll: 1000
        }
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

            const Dashboard = require('webpack-dashboard');
            const DashboardPlugin = require('webpack-dashboard/plugin');
            CONFIG.plugins.push(new DashboardPlugin(Dashboard.setData));
        }
        break;
}

module.exports = CONFIG;
