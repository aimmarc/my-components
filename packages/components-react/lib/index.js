import React from 'react';

function _bem(prefixName, blockSuffix, element, modifiler) {
  if (blockSuffix) {
    prefixName += "-".concat(blockSuffix);
  }
  if (element) {
    prefixName += "__".concat(element);
  }
  if (modifiler) {
    prefixName += "--".concat(modifiler);
  }
  return prefixName;
}
function createBEM(prefixName) {
  var b = function b() {
    var blockSuffix = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
    return _bem(prefixName, blockSuffix, "", "");
  };
  var e = function e() {
    var element = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
    return element ? _bem(prefixName, "", element, "") : "";
  };
  var m = function m() {
    var modifiler = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
    return modifiler ? _bem(prefixName, "", "", modifiler) : "";
  };
  var be = function be() {
    var blockSuffix = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
    var element = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
    return blockSuffix && element ? _bem(prefixName, blockSuffix, element, "") : "";
  };
  var em = function em() {
    var element = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
    var modifiler = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
    return modifiler && element ? _bem(prefixName, "", element, modifiler) : "";
  };
  var bm = function bm() {
    var blockSuffix = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
    var modifiler = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
    return blockSuffix && modifiler ? _bem(prefixName, blockSuffix, "", modifiler) : "";
  };
  var bem = function bem() {
    var blockSuffix = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
    var element = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
    var modifiler = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
    return blockSuffix && modifiler && element ? _bem(prefixName, blockSuffix, element, modifiler) : "";
  };
  var is = function is(name, state) {
    return state ? "is-".concat(name) : "";
  };
  return {
    b: b,
    e: e,
    m: m,
    be: be,
    em: em,
    bm: bm,
    bem: bem,
    is: is
  };
}
function createNamespace(name) {
  var prefixName = "my-".concat(name);
  return createBEM(prefixName);
}

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
