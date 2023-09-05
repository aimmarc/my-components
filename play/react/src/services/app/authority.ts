import { authorityScenesAtom } from '@/store/app';
import { useMount } from 'ahooks';
import { useState } from 'react';
import { useRecoilState } from 'recoil';

/**
 * 封装权限hook
 * @param scenes
 * @returns
 */
export function useAuthority(scenes?: string | string[]) {
    const [permission, setPermission] = useState(false);
    const [authorityScenes, setAuthorityScenes] = useRecoilState(authorityScenesAtom);

    useMount(() => {
        if (!scenes) return;
        if (Array.isArray(scenes)) {
            setPermission(authorityScenes.filter((x) => scenes.includes(x)).length > 0);
        } else {
            setPermission(authorityScenes.includes(scenes));
        }
    });

    return {
        authorityScenes,
        setAuthorityScenes,
        permission,
    };
}
