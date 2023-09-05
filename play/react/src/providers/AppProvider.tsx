import React, { PropsWithChildren } from 'react';
import ThemeProvider from './ThemeProvider';
import zhCN from 'antd/locale/zh_CN';
import appConfig from '@/constant/config/app.config';
import { SizeType } from 'antd/es/config-provider/SizeContext';

/**
 * 封装ConfigProvider
 * @param props
 * @returns
 */
const AppProvider: React.FC<PropsWithChildren> = (props): React.ReactElement => {
    return (
        <>
            <ThemeProvider componentSize={appConfig.componentSize as SizeType} locale={zhCN}>
                {props.children}
            </ThemeProvider>
        </>
    );
};

export default AppProvider;
