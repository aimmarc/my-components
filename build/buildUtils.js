import { PACKAGES_PATH } from './common/constant.js';
import path from 'path';
import { buildRollupCommon } from './common/utils.js';

const outDir = path.resolve(PACKAGES_PATH, 'utils', 'lib');
const input = path.resolve(PACKAGES_PATH, 'utils', 'index.ts');

export default function buildUtils() {
    buildRollupCommon({
        input: input,
        outputDir: outDir,
    });
}

export const dtsConfigUtils = {
    entry: [input],
    format: 'esm',
    outDir: outDir,
    dts: {
        entry: [input],
        outDir: outDir,
    },
};
