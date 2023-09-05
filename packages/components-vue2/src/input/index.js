import MyInput from './src/index.vue';

MyInput.install = function (Vue) {
    Vue.component(MyInput.name, MyInput);
};

export default MyInput;
