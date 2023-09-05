import { useAuthority } from '@/services/app/authority';
import React, { PropsWithChildren } from 'react';

interface IAuthorityProps extends PropsWithChildren {
    scenes: string | string[];
}

/**
 * 权限组件
 * @param props
 * @returns
 */
const Authority: React.FC<IAuthorityProps> = (props): React.ReactElement => {
    const { permission } = useAuthority(props.scenes);

    return <>{permission ? props.children : null}</>;
};

export default Authority;
