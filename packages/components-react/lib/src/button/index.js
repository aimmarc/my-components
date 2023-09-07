import React from 'react';
import { createNamespace } from '@mycomponent/utils';

const Button = (props) => {
  const bem = createNamespace("button");
  return /* @__PURE__ */ React.createElement("button", { className: bem.b() }, props.children);
};

export { Button as default };
