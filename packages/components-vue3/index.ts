import MyButton from './src/button';
import MyInput from './src/input';

const components = [MyButton, MyInput];

const install = function (app: any) {
    components.forEach((com) => {
        app.component(com.name, com);
    });
};

export { MyButton, MyInput };

export default {
    install,
};
