import { PACKAGES_PATH } from './common/constant.js';
import path from 'path';
import { buildRollupCommon } from './common/utils.js';

export default function buildUtils() {
    buildRollupCommon({
        input: path.resolve(PACKAGES_PATH, 'utils', 'index.ts'),
        outputDir: path.resolve(PACKAGES_PATH, 'utils', 'lib'),
    });
}

export const dtsConfigUtils = {
    entry: [path.resolve(PACKAGES_PATH, 'utils', 'index.ts')],
    format: 'esm',
    outDir: path.resolve(PACKAGES_PATH, 'utils', 'lib'),
    dts: {
        entry: [path.resolve(PACKAGES_PATH, 'utils', 'index.ts')],
        outDir: path.resolve(PACKAGES_PATH, 'utils', 'lib'),
    },
};
