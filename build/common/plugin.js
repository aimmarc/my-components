import resolve from '@rollup/plugin-node-resolve';
import esbuild from 'rollup-plugin-esbuild';
import extensions from 'rollup-plugin-extensions';
import commonjs from '@rollup/plugin-commonjs';
import url from '@rollup/plugin-url';
import vue2 from 'rollup-plugin-vue';
import vue3 from "unplugin-vue/rollup";

export function defaultPlugin() {
    return [
        esbuild(),
        commonjs(),
        resolve(),
        url(),
        extensions({
            extensions: ['.tsx', '.ts', '.jsx', '.js', '.vue'],
        }),
    ];
}

export function vue2Plugin(sourceRoot) {
    return [
        ...defaultPlugin(),
        vue2({
            target: 'browser',
            sourceRoot: sourceRoot,
        }),
        // babel({
        //     babelHelpers: 'runtime',
        //     presets: [
        //         [
        //             '@babel/preset-env',
        //             {
        //                 targets: {
        //                     browsers: ['> 1%', 'last 2 versions', 'not ie <= 8'],
        //                 },
        //             },
        //         ],
        //     ],
        //     compact: false,
        //     babelrc: false,
        //     plugins: [
        //         [
        //             '@babel/plugin-transform-runtime',
        //             {
        //                 corejs: { version: 3 },
        //             },
        //         ],
        //     ],
        //     extensions: ['.js', '.jsx', '.vue', '.ts', '.tsx', '.es6', '.es', '.mjs'],
        // }),
    ];
}

export function vue3Plugin() {
    return [
        ...defaultPlugin(),
        vue3(),
    ]
}

export function reactPlugin() {
    return [
        ...defaultPlugin(),
        // babel({
        //     babelHelpers: 'runtime',
        //     presets: [
        //         [
        //             '@babel/preset-env',
        //             {
        //                 targets: {
        //                     browsers: ['> 1%', 'last 2 versions', 'not ie <= 8'],
        //                 },
        //             },
        //         ],
        //         '@babel/preset-react',
        //     ],
        //     compact: false,
        //     babelrc: false,
        //     plugins: [
        //         [
        //             '@babel/plugin-transform-runtime',
        //             {
        //                 corejs: { version: 3 },
        //             },
        //         ],
        //         '@babel/plugin-transform-react-jsx',
        //     ],
        //     extensions: ['.js', '.jsx', '.ts', '.tsx', '.es6', '.es', '.mjs'],
        // }),
    ];
}
