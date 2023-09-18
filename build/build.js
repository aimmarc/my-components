import buildReact from './react.js';
import buildUtils from './buildUtils.js';
import { buildVue2 } from './vue2.js';
import buildRecoil from './buildRecoil.js';
import { buildVue3 } from './vue3.js';

function build() {
    console.log('env', process.env.NODE_ENV);
    // rmdirALL(path.resolve(PACKAGES_PATH, 'components-react', 'lib'), {
    //     force: true,
    // });
    switch (process.env.NODE_ENV) {
        case 'react':
            buildReact();
            break;
        case 'vue2':
            buildVue2();
            break;
        case 'vue3':
            buildVue3();
            break;
        case 'utils':
            buildUtils();
            break;
        case 'hox':
            buildRecoil();
            break;
    }
}

build();
export default build;
