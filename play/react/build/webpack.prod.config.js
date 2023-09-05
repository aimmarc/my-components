const { merge } = require('webpack-merge');
const webpackBaseConfig = require('./webpack.base.config');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { VanillaExtractPlugin } = require('@vanilla-extract/webpack-plugin');

module.exports = merge(webpackBaseConfig, {
    mode: 'production',

    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
                exclude: /node_modules/,
            },
        ],
    },

    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html',
            hash: true,
            minify: {
                //压缩HTML文件
                removeComments: false, //移除HTML中的注释
                collapseWhitespace: false, //删除空白符与换行符
            },
        }),
        new MiniCssExtractPlugin({
            ignoreOrder: true,
            filename: 'css/[name].[contenthash:7].css',
            chunkFilename: 'css/[name].[contenthash:7].css',
        }),
        new VanillaExtractPlugin(),
    ],

    optimization: {
        usedExports: true,
        minimize: true,
    },
});
