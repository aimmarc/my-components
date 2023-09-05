const path = require('path');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const friendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const { VanillaExtractPlugin } = require('@vanilla-extract/webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = {
    entry: {
        app: ['./src/index.tsx'],
    },
    output: {
        publicPath: process.env.NODE_ENV === 'production' ? '/dist/' : '/',
        filename: 'js/[name].bundle.[hash:8].js',
        path: path.resolve(__dirname, '../dist'),
    },

    target: ['web', 'es5'],

    stats: 'errors-only',

    performance: {
        hints: false,
    },

    module: {
        rules: [
            {
                test: /\.(jsx|tsx|js|ts)$/,
                use: [
                    'babel-loader',
                    {
                        loader: 'ts-loader',
                        options: {
                            transpileOnly: true,
                            happyPackMode: true,
                            compilerOptions: {
                                module: 'es2015',
                                sourceMap: true,
                            },
                        },
                    },
                ],
                exclude: /node_modules/,
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: 'img/[name].[hash:7].[ext]',
                },
            },
            {
                test: /\.html$/i,
                loader: 'html-loader',
            },
        ],
    },

    plugins: [
        new ProgressBarPlugin(),
        new friendlyErrorsWebpackPlugin(),
        new VanillaExtractPlugin(),
        new Dotenv({
            path: path.resolve(
                process.env.NODE_ENV === 'production' ? './config/env/prod.env' : './config/env/dev.env',
            ),
            safe: true, // load '.env.example' to verify the '.env' variables are all set. Can also be a string to a different file.
            allowEmptyValues: true, // allow empty variables (e.g. `FOO=`) (treat it as empty string, rather than missing)
            systemvars: true, // load all the predefined 'process.env' variables which will trump anything local per dotenv specs.
            silent: true, // hide any errors
            defaults: false, // load '.env.defaults' as the default values if empty.
            // prefix: 'import.meta.env.',
        }),
    ],

    resolve: {
        extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
        alias: {
            '@': path.resolve(__dirname, '../src'),
            '@components': path.resolve(__dirname, '../src/components'),
            '@utils': path.resolve(__dirname, '../src/utils'),
            '@services': path.resolve(__dirname, '../src/services'),
        },
    },
};
