import React from 'react';
import { Menu, Layout } from 'antd';
import { sider } from './SiderBar.css';
import { useSiderBar } from '@/services/app/menu';
import appConfig from '@/constant/config/app.config';
import { useTheme } from '@/services/app/theme';
import Logo from './Logo';

const { Sider } = Layout;

/**
 * 侧边栏
 * @returns
 */
const SiderBar: React.FC = () => {
    const { items, collapsed, selectedKeys, defaultOpenKeys, setCollapsed, handleSelect, handleOpen } = useSiderBar();
    const { themeAlgorithm } = useTheme();

    return (
        <Sider
            collapsible
            className={sider}
            style={{ position: 'fixed', boxShadow: '2px 0 8px 0 rgba(29,35,41,.05)' }}
            width={appConfig.siderWidth.open}
            collapsed={collapsed}
            onCollapse={(value) => setCollapsed(value)}
            theme={themeAlgorithm}
        >
            <div
                style={{
                    height: 32,
                    margin: 16,
                }}
            >
                <Logo />
            </div>
            <Menu
                items={items}
                mode="inline"
                theme={themeAlgorithm}
                onSelect={handleSelect}
                onOpenChange={handleOpen}
                selectedKeys={selectedKeys}
                openKeys={defaultOpenKeys}
            ></Menu>
        </Sider>
    );
};

export default SiderBar;
