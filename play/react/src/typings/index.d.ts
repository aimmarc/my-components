declare const process: any;

declare interface IKeyVal {
    [key: string]: any;
}

declare interface IOption extends IKeyVal {
    label: string;
    value: any;
}

declare module '*.svg';
declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.gif';
declare module '*.bmp';
declare module '*.tiff';
// declare module 'recoil';
