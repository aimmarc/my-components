import React from 'react';
import { createNamespace } from '@mycomponent/utils';

const Button = (props) => {
  const bem = createNamespace("button");
  return /* @__PURE__ */ React.createElement("button", { className: bem.b() }, props.children);
};

const Input = (props) => {
  return /* @__PURE__ */ React.createElement("input", { placeholder: props.placeholder });
};

var index = {
  Button,
  Input
};

export { Button, Input, index as default };
