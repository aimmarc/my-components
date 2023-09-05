import { globalStyle, style } from '@vanilla-extract/css';

export const sider = style({
    position: 'fixed',
    left: 0,
    top: 0,
    bottom: 0,
    height: '100vh',
    overflow: 'auto',
    zIndex: 9,
});

globalStyle(`.${sider} .ant-menu-root`, {
    borderInlineEnd: 'none !important',
});
