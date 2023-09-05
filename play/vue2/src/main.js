import Vue from 'vue';
import './style.css';
import App from './App.vue';
import mycomponentVue2 from '@mycomponent/components-vue2';

Vue.use(mycomponentVue2);

const app = new Vue({
    render: (h) => h(App),
});

app.$mount('#app');
