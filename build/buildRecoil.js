import * as rollup from 'rollup';
import { PACKAGES_PATH } from './common/constant.js';
import path from 'path';
import { reactPlugin } from './common/plugin.js';

const plugins = [...reactPlugin()];
const external = ['react', 'react-dom', '@mycomponent/utils'];
const recoilPath = 'my-hox/src';

const inputOptions = {
    input: path.resolve(PACKAGES_PATH, recoilPath, 'index.ts'),
    plugins,
    external,
};
const outputOptions = {
    dir: path.resolve(PACKAGES_PATH, recoilPath, '../lib'),
    format: 'es',
    name: 'componentReact',
};

function generateDtsEntry() {
    const entry = {
        index: path.resolve(PACKAGES_PATH, recoilPath, 'index.ts'),
    };
    return entry;
}

export const dtsConfigRecoil = {
    entry: generateDtsEntry(),
    format: 'esm',
    outDir: path.resolve(PACKAGES_PATH, recoilPath, '../lib'),
    dts: {
        entry: generateDtsEntry(),
        outDir: path.resolve(PACKAGES_PATH, recoilPath, '../lib'),
    },
};

export default async function buildRecoil() {
    const bundle = await rollup.rollup(inputOptions);
    const { output } = await bundle.generate(outputOptions);
    await bundle.write(outputOptions);
}
