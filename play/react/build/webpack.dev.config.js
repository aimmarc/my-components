const { merge } = require('webpack-merge');
const webpackBaseConfig = require('./webpack.base.config');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const apiMocker = require('mocker-api');
const path = require('path');
const proxy = require('../config/proxy.config');
const portfinderSync = require('portfinder-sync');

module.exports = merge(webpackBaseConfig, {
    mode: 'development',

    devtool: 'cheap-module-source-map',

    devServer: {
        host: '0.0.0.0',
        port: portfinderSync.getPort(8080),
        historyApiFallback: {
            rewrites: [
                {
                    from: /.*/g,
                    to: '/index.html', //与output的publicPath有关(HTMLplugin生成的html默认为index.html)
                },
            ],
        },
        proxy,
        onBeforeSetupMiddleware({ app }) {
            apiMocker(app, path.resolve('./mock/index.js'));
        },
    },

    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
                exclude: /node_modules/,
            },
        ],
    },

    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html',
        }),
    ],
});
