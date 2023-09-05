import MyInput from './src/input/index.js';
import MyButton from './src/button/index.js';

export { MyInput, MyButton };

export const components = [MyInput, MyButton];

const install = function (Vue) {
    components.forEach((component) => {
        Vue.use(component);
    });
};

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

export default {
    install,
};
