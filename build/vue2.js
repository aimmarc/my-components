import { buildRollupCommon } from './common/utils.js';
import { PACKAGES_PATH } from './common/constant.js';
import components from '../packages/components-vue2/components.js';
import path from 'path';
import { vue2Plugin } from './common/plugin.js';

export function buildVue2() {
    buildRollupCommon({
        input: path.resolve(PACKAGES_PATH, 'components-vue2', 'index.js'),
        outputDir: path.resolve(PACKAGES_PATH, 'components-vue2', 'lib'),
        external: ['vue'],
        plugins: [...vue2Plugin(path.resolve(PACKAGES_PATH, 'components-vue2', 'index.js'))],
    });
}

function generateDtsEntry() {
    const entry = {
        index: path.resolve(PACKAGES_PATH, 'components-vue2', 'components.d.ts'),
    };
    // components.forEach((item) => {
    //     entry[`src/${item}/index`] = path.resolve(
    //         PACKAGES_PATH,
    //         `components-vue2/src/${item}/`,
    //         'index.js',
    //     );
    // });
    return entry;
}

export const dtsConfigVue2 = {
    entry: generateDtsEntry(),
    format: 'esm',
    outDir: path.resolve(PACKAGES_PATH, 'components-vue2', 'lib'),
    dts: {
        entry: generateDtsEntry(),
        outDir: path.resolve(PACKAGES_PATH, 'components-vue2', 'lib'),
    },
};
