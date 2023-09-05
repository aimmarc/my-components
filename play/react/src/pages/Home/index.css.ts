import { style } from '@vanilla-extract/css';

export const home = style({});

export const content = style({
    padding: 15,
    overflow: 'auto',
});

export const header = style({
    display: 'flex',
    alignItems: 'center',
    lineHeight: 'unset !important',
});

export const rightPanel = style({});

export const switchDarkMode = style({
    cursor: 'pointer',
    fontSize: 28,
    marginLeft: 10,
});
