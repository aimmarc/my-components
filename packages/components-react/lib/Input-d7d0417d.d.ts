import React__default, { PropsWithChildren } from 'react';

interface InputProps extends PropsWithChildren {
    type?: 'default' | 'primary' | 'info' | 'success' | 'warning' | 'danger';
    placeholder?: string;
}
declare const Input: React__default.FC<InputProps>;

export { InputProps as I, Input as a };
