import buildReact from './react.js';
import buildUtils from './buildUtils.js';

function build() {
    console.log(process.env.NODE_ENV);
    // rmdirALL(path.resolve(PACKAGES_PATH, 'components-react', 'lib'), {
    //     force: true,
    // });
    switch (process.env.NODE_ENV) {
        case 'react':
            buildReact();
            break;
        case 'vue2':
            break;
        case 'vue3':
            break;
        case 'utils':
            buildUtils();
            break;
    }
}

build();
export default build;
