import React, { useEffect, useState } from 'react';
import { createStore } from '@mycomponent/my-recoil';

const [useStore, BaseProvider] = createStore(() => {
    const [count, setCount] = useState(0);
    const [name, setName] = useState('jack');

    const add = () => {
        setCount(count + 1);
    };

    const changeName = (name: string) => {
        setName(name);
    };

    return {
        count,
        add,
        name,
        changeName,
    };
});

const SonComp: React.FC = () => {
    const { count, add } = useStore();

    return (
        <>
            <button
                onClick={() => {
                    console.log(add);
                    add?.();
                }}
            >
                +
            </button>
            <div>{count}</div>
        </>
    );
};

const Son2: React.FC = () => {
    const { name, changeName } = useStore();

    useEffect(() => {
        console.log('effect');
    });
    return (
        <div>
            {name}
            <button
                onClick={() => {
                    changeName('Bob');
                }}
            >
                change{' '}
            </button>
        </div>
    );
};

const MyRecoil: React.FC = () => {
    const { count } = useStore();

    return (
        <BaseProvider>
            <div>{count}</div>
            <SonComp />
            <Son2 />
        </BaseProvider>
    );
};

export default MyRecoil;
