import React, { PropsWithChildren } from 'react';

export interface InputProps extends PropsWithChildren {
    type?: 'default' | 'primary' | 'info' | 'success' | 'warning' | 'danger';
    placeholder?: string;
}

const Input: React.FC<InputProps> = (props): React.ReactElement => {
    return <input placeholder={props.placeholder} />;
};

export default Input;
