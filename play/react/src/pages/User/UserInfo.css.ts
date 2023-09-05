import { cssVars } from '@/assets/styles/common';
import { CssVarsEnum } from '@/constant/enum/style';
import { style } from '@vanilla-extract/css';

export const userInfoWrap = style({
    color: cssVars[CssVarsEnum.TextBase],
});
