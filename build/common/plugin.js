import resolve from '@rollup/plugin-node-resolve';
import esbuild from 'rollup-plugin-esbuild';
import extensions from 'rollup-plugin-extensions';
import commonjs from '@rollup/plugin-commonjs';
import url from '@rollup/plugin-url';

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
