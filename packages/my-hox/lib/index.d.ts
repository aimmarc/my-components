import React, { PropsWithChildren } from 'react';

declare function createStore<T = any>(cb: () => T): [() => T, React.FC<PropsWithChildren>];

export { createStore };
