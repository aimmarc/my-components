import resolve from '@rollup/plugin-node-resolve';
import esbuild from 'rollup-plugin-esbuild';
import extensions from 'rollup-plugin-extensions';
import commonjs from '@rollup/plugin-commonjs';
import url from '@rollup/plugin-url';
import vue2 from 'rollup-plugin-vue';
import vue3 from 'unplugin-vue/rollup';
import vueJsx from 'unplugin-vue-jsx/rollup';

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
    ];
}

export function vue3Plugin() {
    return [...defaultPlugin(), vue3(), vueJsx()];
}

export function reactPlugin() {
    return [...defaultPlugin()];
}
