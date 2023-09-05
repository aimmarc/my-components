import MyButton from './src/index.vue';

MyButtom.install = function (Vue) {
    Vue.component(MyButton.name, MyButton);
};

export default MyButton;
