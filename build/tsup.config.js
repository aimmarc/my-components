import { defineConfig } from 'tsup';
import { dtsConfigReact } from './react';
import { dtsConfigUtils } from './buildUtils';

let config = {};

switch (process.env.NODE_ENV) {
    case 'react':
        config = defineConfig(dtsConfigReact);
        break;
    case 'utils':
        config = defineConfig(dtsConfigUtils);
        break;
}

console.log(config);

export default config;
