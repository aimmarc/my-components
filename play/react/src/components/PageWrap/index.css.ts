import { style } from '@vanilla-extract/css';

export const PageWrapCss = style({
    // type css code...
    minHeight: '100%',
});

export const PageInnerCss = style({
    padding: 20,
});

export const PageHeaderCss = style({
    marginBottom: 20,
});

export const titlePanel = style({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 8,
});
