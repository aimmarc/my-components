import { cssVars } from '@/assets/styles/common';
import { CssVarsEnum } from '@/constant/enum/style';
import { style } from '@vanilla-extract/css';

export const loginWrap = style({
    minHeight: '100vh',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    color: cssVars[CssVarsEnum.TextDescription],
});

export const loginPanel = style({
    width: '450px',
    padding: '40px 40px',
    borderRadius: '20px',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: cssVars[CssVarsEnum.BgContainer],
});

export const formBasic = style({
    width: '320px',
    margin: '0 auto',
});
