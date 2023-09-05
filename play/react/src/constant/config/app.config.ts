import { ComponentSizeEnum } from '../enum';
import { CssVarsEnum } from '../enum/style';

export default {
    appName: 'React Admin',
    logoUrl: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg',
    theme: {
        colorPrimary: '#1677ff',
        borderRadius: 3,
        varKeys: [
            CssVarsEnum.primary,
            CssVarsEnum.BgBase,
            CssVarsEnum.TextBase,
            CssVarsEnum.BgLayout,
            CssVarsEnum.TextDescription,
            CssVarsEnum.BgContainer,
            CssVarsEnum.BgMask,
        ],
    },
    NodeEnv: process.env.NODE_ENV,
    siderWidth: {
        fold: 80,
        open: 240,
    },
    componentSize: ComponentSizeEnum.middle,
};
