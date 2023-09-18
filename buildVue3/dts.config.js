import { buildRollupCommon } from './common/utils.js';
import { PACKAGES_PATH } from './common/constant.js';
import path from 'path';
import { vue3Plugin } from './common/plugin.js';
import { dts } from 'rollup-plugin-dts';

export default {
    input: path.resolve(PACKAGES_PATH, 'components-vue3', 'index.ts'),
    output: [{ file: path.resolve(PACKAGES_PATH, 'components-vue3/lib/index.d.ts'), format: 'es' }],
    plugins: [...vue3Plugin(), dts()],
};
