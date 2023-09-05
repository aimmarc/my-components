var script$1 = {
  name: "my-input",
  props: {
    value: [String, Number],
    placeholder: String,
    type: String
  },
  computed: {
    innerVal: {
      get() {
        return this.value;
      },
      set(val) {
        this.$emit("input", val);
      }
    }
  }
};

function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier /* server only */, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    if (typeof shadowMode !== 'boolean') {
        createInjectorSSR = createInjector;
        createInjector = shadowMode;
        shadowMode = false;
    }
    // Vue.extend constructor export interop.
    const options = typeof script === 'function' ? script.options : script;
    // render functions
    if (template && template.render) {
        options.render = template.render;
        options.staticRenderFns = template.staticRenderFns;
        options._compiled = true;
        // functional template
        if (isFunctionalTemplate) {
            options.functional = true;
        }
    }
    // scopedId
    if (scopeId) {
        options._scopeId = scopeId;
    }
    let hook;
    if (moduleIdentifier) {
        // server build
        hook = function (context) {
            // 2.3 injection
            context =
                context || // cached call
                    (this.$vnode && this.$vnode.ssrContext) || // stateful
                    (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext); // functional
            // 2.2 with runInNewContext: true
            if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
                context = __VUE_SSR_CONTEXT__;
            }
            // inject component styles
            if (style) {
                style.call(this, createInjectorSSR(context));
            }
            // register component module identifier for async chunk inference
            if (context && context._registeredComponents) {
                context._registeredComponents.add(moduleIdentifier);
            }
        };
        // used by ssr in case component is cached and beforeCreate
        // never gets called
        options._ssrRegister = hook;
    }
    else if (style) {
        hook = shadowMode
            ? function (context) {
                style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
            }
            : function (context) {
                style.call(this, createInjector(context));
            };
    }
    if (hook) {
        if (options.functional) {
            // register for functional component in vue file
            const originalRender = options.render;
            options.render = function renderWithStyleInjection(h, context) {
                hook.call(context);
                return originalRender(h, context);
            };
        }
        else {
            // inject component registration as beforeCreate hook
            const existing = options.beforeCreate;
            options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
    }
    return script;
}

/* script */
const __vue_script__$1 = script$1;

/* template */
var __vue_render__$1 = function () {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _vm.type === "checkbox"
    ? _c("input", {
        directives: [
          {
            name: "model",
            rawName: "v-model",
            value: _vm.innerVal,
            expression: "innerVal",
          },
        ],
        attrs: { placeholder: _vm.placeholder, type: "checkbox" },
        domProps: {
          checked: Array.isArray(_vm.innerVal)
            ? _vm._i(_vm.innerVal, null) > -1
            : _vm.innerVal,
        },
        on: {
          change: function ($event) {
            var $$a = _vm.innerVal,
              $$el = $event.target,
              $$c = $$el.checked ? true : false;
            if (Array.isArray($$a)) {
              var $$v = null,
                $$i = _vm._i($$a, $$v);
              if ($$el.checked) {
                $$i < 0 && (_vm.innerVal = $$a.concat([$$v]));
              } else {
                $$i > -1 &&
                  (_vm.innerVal = $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
              }
            } else {
              _vm.innerVal = $$c;
            }
          },
        },
      })
    : _vm.type === "radio"
    ? _c("input", {
        directives: [
          {
            name: "model",
            rawName: "v-model",
            value: _vm.innerVal,
            expression: "innerVal",
          },
        ],
        attrs: { placeholder: _vm.placeholder, type: "radio" },
        domProps: { checked: _vm._q(_vm.innerVal, null) },
        on: {
          change: function ($event) {
            _vm.innerVal = null;
          },
        },
      })
    : _c("input", {
        directives: [
          {
            name: "model",
            rawName: "v-model",
            value: _vm.innerVal,
            expression: "innerVal",
          },
        ],
        attrs: { placeholder: _vm.placeholder, type: _vm.type },
        domProps: { value: _vm.innerVal },
        on: {
          input: function ($event) {
            if ($event.target.composing) {
              return
            }
            _vm.innerVal = $event.target.value;
          },
        },
      })
};
var __vue_staticRenderFns__$1 = [];
__vue_render__$1._withStripped = true;

  /* style */
  const __vue_inject_styles__$1 = undefined;
  /* scoped */
  const __vue_scope_id__$1 = undefined;
  /* module identifier */
  const __vue_module_identifier__$1 = undefined;
  /* functional template */
  const __vue_is_functional_template__$1 = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$1 = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__$1, staticRenderFns: __vue_staticRenderFns__$1 },
    __vue_inject_styles__$1,
    __vue_script__$1,
    __vue_scope_id__$1,
    __vue_is_functional_template__$1,
    __vue_module_identifier__$1,
    false,
    undefined,
    undefined,
    undefined
  );

__vue_component__$1.install = function(Vue) {
  Vue.component(__vue_component__$1.name, __vue_component__$1);
};

var script = {
  name: "my-button",
  props: {
    type: String,
    htmlType: String
  }
};

/* script */
const __vue_script__ = script;

/* template */
var __vue_render__ = function () {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("button", { attrs: { type: _vm.htmlType } }, [_vm._t("default")], 2)
};
var __vue_staticRenderFns__ = [];
__vue_render__._withStripped = true;

  /* style */
  const __vue_inject_styles__ = undefined;
  /* scoped */
  const __vue_scope_id__ = undefined;
  /* module identifier */
  const __vue_module_identifier__ = undefined;
  /* functional template */
  const __vue_is_functional_template__ = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__ = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
    __vue_inject_styles__,
    __vue_script__,
    __vue_scope_id__,
    __vue_is_functional_template__,
    __vue_module_identifier__,
    false,
    undefined,
    undefined,
    undefined
  );

MyButtom.install = function(Vue) {
  Vue.component(__vue_component__.name, __vue_component__);
};

const components = [__vue_component__$1, __vue_component__];
const install = function(Vue) {
  components.forEach((component) => {
    Vue.use(component);
  });
};
if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}
var index = {
  install
};

export { __vue_component__ as MyButton, __vue_component__$1 as MyInput, components, index as default };
