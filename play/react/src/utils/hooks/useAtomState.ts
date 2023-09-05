import { useEffect } from 'react';
import { RecoilState, useRecoilState, SetterOrUpdater } from 'recoil';

/**
 * 封装useRecoilState
 * @param atomState
 * @returns
 */
function useAtomState<T>(atomState: RecoilState<T>, update?: (arg?: T) => void): [T, SetterOrUpdater<T>] {
    const [state, setState]: [T, SetterOrUpdater<T>] = useRecoilState(atomState);

    useEffect(() => {
        if (typeof update === 'function') {
            update(state);
        }
    }, [state]);

    return [state, setState];
}

export default useAtomState;
