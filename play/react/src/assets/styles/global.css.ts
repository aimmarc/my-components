import { CssVarsEnum } from '@/constant/enum/style';
import { globalStyle } from '@vanilla-extract/css';
import { cssVars } from './common';

globalStyle('html, body', {
    margin: 0,
    padding: 0,
    color: cssVars[CssVarsEnum.TextBase],
    backgroundColor: cssVars[CssVarsEnum.BgLayout],
});
