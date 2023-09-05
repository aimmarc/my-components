import React, { PropsWithChildren } from 'react';
import { createNamespace } from '@mycomponent/utils';

export interface ButtonProps extends PropsWithChildren {
    type?: 'default' | 'primary' | 'info' | 'success' | 'warning' | 'danger';
}

const Button: React.FC<ButtonProps> = (props): React.ReactElement => {
    const bem = createNamespace('button');
    return <button className={bem.b()}>{props.children}</button>;
};

export default Button;
