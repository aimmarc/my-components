import { buildRollupCommon } from './common/utils.js';
import { PACKAGES_PATH } from './common/constant.js';
import path from 'path';
import { vue3Plugin } from './common/plugin.js';

export function buildVue3() {
    buildRollupCommon({
        input: path.resolve(PACKAGES_PATH, 'components-vue3', 'index.ts'),
        outputDir: path.resolve(PACKAGES_PATH, 'components-vue3', 'lib'),
        external: ['vue'],
        plugins: [...vue3Plugin()],
    });
}

function generateDtsEntry() {
    const entry = {
        index: path.resolve(PACKAGES_PATH, 'components-vue3', 'index.ts'),
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

export const dtsConfigVue3 = {
    entry: generateDtsEntry(),
    format: 'esm',
    outDir: path.resolve(PACKAGES_PATH, 'components-vue3', 'lib'),
    dts: {
        entry: generateDtsEntry(),
        outDir: path.resolve(PACKAGES_PATH, 'components-vue3', 'lib'),
    },
};

buildVue3();
