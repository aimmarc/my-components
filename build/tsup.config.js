import { defineConfig } from 'tsup';
import { dtsConfigReact } from './react';
import { dtsConfigUtils } from './buildUtils';
import { dtsConfigVue2 } from './vue2';
import { dtsConfigRecoil } from './buildRecoil';
import { dtsConfigVue3 } from './vue3';

let config = {};

switch (process.env.NODE_ENV) {
    case 'react':
        config = defineConfig(dtsConfigReact);
        break;
    case 'utils':
        config = defineConfig(dtsConfigUtils);
        break;
    case 'vue2':
        config = defineConfig(dtsConfigVue2);
        break;
    case 'vue3':
        config = defineConfig(dtsConfigVue3);
        break;
    case 'hox':
        config = defineConfig(dtsConfigRecoil);
        break;
}

console.log(config);

export default config;
