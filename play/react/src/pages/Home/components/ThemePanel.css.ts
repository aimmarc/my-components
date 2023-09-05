import { style } from '@vanilla-extract/css';

export const themePanel = style({
    display: 'flex',
    justifyContent: 'space-around',
});

export const colorItem = style({
    selectors: {
        [`${themePanel} &`]: {
            width: '22px',
            height: '22px',
            borderRadius: 3,
            cursor: 'pointer',
        },
    },
});
