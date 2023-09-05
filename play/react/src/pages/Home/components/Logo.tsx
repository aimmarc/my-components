import React from 'react';
import { logo, logoImg, logoName } from './Logo.css';
import appConfig from '@/constant/config/app.config';
import { useSiderBar } from '@/services/app/menu';

const Logo = () => {
    const { collapsed } = useSiderBar();

    return (
        <div className={logo} onClick={() => (location.href = '/')}>
            <img className={logoImg} src={appConfig.logoUrl} alt="" />
            {!collapsed ? (
                <span className={logoName} title={appConfig.appName}>
                    {appConfig.appName}
                </span>
            ) : null}
        </div>
    );
};

export default Logo;
