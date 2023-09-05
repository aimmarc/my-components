import { style } from '@vanilla-extract/css';
import { cssVars } from './common';
import { CssVarsEnum } from '@/constant/enum/style';

export const app = style({
    position: 'relative',
    backgroundColor: cssVars[CssVarsEnum.BgBase],
});

export const settingButtom = style({
    position: 'fixed',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    top: 240,
    right: 0,
    width: 48,
    height: 48,
    fontSize: 16,
    borderRadius: '4px 0 0 4px',
    zIndex: 1,
    backgroundColor: cssVars[CssVarsEnum.primary],
    color: '#fff',
    cursor: 'pointer',
});
