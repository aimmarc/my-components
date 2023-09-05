import * as rollup from 'rollup';
import { PACKAGES_PATH } from './common/constant.js';
import path from 'path';
import { defaultPlugin } from './common/plugin.js';
import { babel } from '@rollup/plugin-babel';
import componentsJson from '../packages/components-react/components.js';

const components = Object.keys(componentsJson);
const plugins = [
    ...defaultPlugin(),
    babel({
        babelHelpers: 'runtime',
        presets: [
            [
                '@babel/preset-env',
                {
                    targets: {
                        browsers: ['> 1%', 'last 2 versions', 'not ie <= 8'],
                    },
                },
            ],
            '@babel/preset-react',
        ],
        compact: false,
        babelrc: false,
        plugins: [
            [
                '@babel/plugin-transform-runtime',
                {
                    corejs: { version: 3 },
                },
            ],
            '@babel/plugin-transform-react-jsx',
        ],
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.es6', '.es', '.mjs'],
    }),
    // typescript({
    //     outDir: path.resolve(PACKAGES_PATH, 'components-react', 'lib', 'index.d.ts'),
    // }),
];
const external = ['react', 'react-dom'];

const inputOptions = {
    input: path.resolve(PACKAGES_PATH, 'components-react', 'index.ts'),
    plugins,
    external,
};
const outputOptions = {
    dir: path.resolve(PACKAGES_PATH, 'components-react', 'lib'),
    format: 'es',
    name: 'componentReact',
};

function generateDtsEntry() {
    const entry = {
        index: path.resolve(PACKAGES_PATH, 'components-react', 'index.ts'),
    };
    components.forEach((item) => {
        entry[`src/${item}/index`] = path.resolve(
            PACKAGES_PATH,
            `components-react/src/${item}/`,
            'index.ts',
        );
    });
    return entry;
}

export const dtsConfigReact = {
    entry: generateDtsEntry(),
    format: 'esm',
    outDir: path.resolve(PACKAGES_PATH, 'components-react', 'lib'),
    dts: {
        entry: generateDtsEntry(),
        outDir: path.resolve(PACKAGES_PATH, 'components-react', 'lib'),
    },
};

async function buildSingles() {
    const inputs = {};
    components.forEach((item) => {
        inputs[`${item}/index`] = path.resolve(
            PACKAGES_PATH,
            `components-react/src/${item}/`,
            'index.ts',
        );
    });
    const inputOptions = {
        input: inputs,
        plugins,
        external,
    };
    const outputOptions = {
        dir: path.resolve(PACKAGES_PATH, 'components-react/lib/src'),
        formats: ['es'],
    };
    const bundle = await rollup.rollup(inputOptions);
    await bundle.generate(outputOptions);
    await bundle.write(outputOptions);
}

export default async function buildReact() {
    const bundle = await rollup.rollup(inputOptions);
    const { output } = await bundle.generate(outputOptions);
    await bundle.write(outputOptions);
    buildSingles();
}
