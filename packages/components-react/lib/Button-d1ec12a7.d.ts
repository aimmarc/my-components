import React__default, { PropsWithChildren } from 'react';

interface ButtonProps extends PropsWithChildren {
    type?: 'default' | 'primary' | 'info' | 'success' | 'warning' | 'danger';
}
declare const Button: React__default.FC<ButtonProps>;

export { ButtonProps as B, Button as a };
