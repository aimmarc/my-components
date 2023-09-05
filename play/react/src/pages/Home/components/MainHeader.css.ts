import { style } from '@vanilla-extract/css';

export const header = style({
    display: 'flex',
    alignItems: 'center',
    lineHeight: 'unset !important',
    boxShadow: '0 1px 4px rgba(0,21,41,.08)',
    zIndex: 8,
});

export const switchDarkMode = style({
    cursor: 'pointer',
    fontSize: 28,
    marginLeft: 10,
});

export const rightPanel = style({
    display: 'flex',
    alignItems: 'center',
});

export const userPanel = style({
    marginLeft: 20,
    cursor: 'pointer',
});

export const userName = style({
    marginLeft: 8,
});
