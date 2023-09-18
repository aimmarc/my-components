import { defineComponent, defineSlots, createVNode } from 'vue';

var MyButton = defineComponent({
  name: "my-button",
  setup() {
    var _a;
    const slots = defineSlots();
    return createVNode("button", null, [(_a = slots.default) == null ? void 0 : _a.call(slots)]);
  }
});

var MyInput = defineComponent({
  name: "my-input",
  setup() {
    return createVNode("input", null, null);
  }
});

const components = [MyButton, MyInput];
const install = function (app) {
  components.forEach(com => {
    app.component(com.name, com);
  });
};
var index = {
  install
};

export { MyButton, MyInput, index as default };
