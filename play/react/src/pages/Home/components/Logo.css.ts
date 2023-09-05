import { cssVars } from '@/assets/styles/common';
import { CssVarsEnum } from '@/constant/enum/style';
import { style } from '@vanilla-extract/css';

export const logo = style({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: cssVars[CssVarsEnum.TextBase],
    fontSize: 22,
    fontWeight: 500,
    textAlign: 'center',
    height: '100%',
    cursor: 'pointer',
});

export const logoImg = style({
    selectors: {
        [`${logo} &`]: {
            width: 32,
            height: 32,
        },
    },
});

export const logoName = style({
    selectors: {
        [`${logo} &`]: {
            minWidth: 0,
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            marginLeft: 15,
        },
    },
});
