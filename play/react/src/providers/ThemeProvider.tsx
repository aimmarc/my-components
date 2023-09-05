import appConfig from '@/constant/config/app.config';
import { StorageEnum } from '@/constant/enum/storage';
import { useTheme } from '@/services/app/theme';
import { buildCssVars, switchDarkMode } from '@/utils/theme';
import { ConfigProvider, theme } from 'antd';
import React, { PropsWithChildren, useEffect } from 'react';
import { Locale } from 'antd/es/locale';
import { SizeType } from 'antd/es/config-provider/SizeContext';

interface IAppProviderProps extends PropsWithChildren {
    locale: Locale;
    componentSize: SizeType;
}

/**
 * 确保能获取到主题token
 * @param props
 * @returns
 */
const ChildrenCmp: React.FC<PropsWithChildren> = (props): React.ReactElement => {
    const { themeToken } = useTheme();
    const { token } = theme.useToken();
    useEffect(() => {
        buildCssVars(token);
        localStorage.setItem(
            StorageEnum.themeToken,
            JSON.stringify({
                colorPrimary: themeToken.colorPrimary,
                borderRadius: themeToken.borderRadius || appConfig.theme.borderRadius,
            }),
        );
    }, [themeToken]);

    return <>{props.children}</>;
};

/**
 * 封装ThemeProvider
 * @param props
 * @returns
 */
const ThemeProvider: React.FC<IAppProviderProps> = (props): React.ReactElement => {
    const { themeToken, themeAlgorithm, setThemeToken } = useTheme();

    useEffect(() => {
        localStorage.setItem(StorageEnum.themeMode, themeAlgorithm);
        const token = switchDarkMode();
        setTimeout(() => {
            setThemeToken(token);
        });
    }, [themeAlgorithm]);

    const resolveToken = (token: { [key: string]: any }) => {
        const resToken = { ...token };
        Object.keys(resToken).forEach((key) => {
            if (!resToken[key] && typeof resToken[key] !== 'number') {
                delete resToken[key];
            }
        });
        return resToken;
    };

    return (
        <>
            <ConfigProvider
                locale={props.locale}
                theme={{
                    token: resolveToken(themeToken),
                    algorithm: themeAlgorithm === 'dark' ? theme.darkAlgorithm : theme.defaultAlgorithm,
                }}
                componentSize={props.componentSize}
            >
                <ChildrenCmp>{props.children}</ChildrenCmp>
            </ConfigProvider>
        </>
    );
};

export default ThemeProvider;
