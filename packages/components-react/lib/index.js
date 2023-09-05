import React from 'react';
import { createNamespace } from '@mycomponent/utils';

var Button = function Button(props) {
  var bem = createNamespace("button");
  return /* @__PURE__ */React.createElement("button", {
    className: bem.b()
  }, props.children);
};

var Input = function Input(props) {
  return /* @__PURE__ */React.createElement("input", {
    placeholder: props.placeholder
  });
};

var index = {
  Button: Button,
  Input: Input
};

export { Button, Input, index as default };
