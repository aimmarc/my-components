import React, {
    PropsWithChildren,
    createContext,
    useContext,
    memo,
    useState,
    useEffect,
} from 'react';

function createStore<T = any>(cb: () => T): [() => T, React.FC<PropsWithChildren>] {
    const storeContext = createContext<T>({} as T);
    const nodeContext = createContext({
        node: undefined as React.ReactNode,
    });

    const OuterProvider: React.FC<PropsWithChildren<{ node: React.ReactNode }>> = ({
        node,
        children,
    }) => {
        return <nodeContext.Provider value={{ node }}>{children}</nodeContext.Provider>;
    };

    const InnerProvider: React.FC<PropsWithChildren> = memo(() => {
        const { node } = useContext(nodeContext);
        console.log('node', node);
        return <>{node}</>;
    });

    const StoreExcuter: React.FC<PropsWithChildren> = memo(({ children }) => {
        const data = cb();
        return <storeContext.Provider value={data}>{children}</storeContext.Provider>;
    });

    const StoreProvider: React.FC<PropsWithChildren> = (props): React.ReactNode => {
        return (
            <OuterProvider node={props.children}>
                <StoreExcuter>
                    <InnerProvider />
                </StoreExcuter>
            </OuterProvider>
        );
    };

    function useStore(): T {
        const context: T = useContext(storeContext);

        return context;
    }

    return [useStore, memo(StoreProvider)];
}

export { createStore };
