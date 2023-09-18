import React, { createContext, memo, useContext } from 'react';

function createStore(cb) {
  const storeContext = createContext({});
  const nodeContext = createContext({
    node: void 0
  });
  const OuterProvider = ({
    node,
    children
  }) => {
    return /* @__PURE__ */ React.createElement(nodeContext.Provider, { value: { node } }, children);
  };
  const InnerProvider = memo(() => {
    const { node } = useContext(nodeContext);
    console.log("node", node);
    return /* @__PURE__ */ React.createElement(React.Fragment, null, node);
  });
  const StoreExcuter = memo(({ children }) => {
    const data = cb();
    return /* @__PURE__ */ React.createElement(storeContext.Provider, { value: data }, children);
  });
  const StoreProvider = (props) => {
    return /* @__PURE__ */ React.createElement(OuterProvider, { node: props.children }, /* @__PURE__ */ React.createElement(StoreExcuter, null, /* @__PURE__ */ React.createElement(InnerProvider, null)));
  };
  function useStore() {
    const context = useContext(storeContext);
    return context;
  }
  return [useStore, memo(StoreProvider)];
}

export { createStore };
