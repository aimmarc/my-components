import { Header } from 'antd/es/layout/layout';
import React, { useState } from 'react';
import { header, rightPanel, switchDarkMode, userPanel, userName } from './MainHeader.css';
import { Avatar, Dropdown, MenuProps, Popover, theme } from 'antd';
import ThemePanel from './ThemePanel';
import IconFont from '@/components/IconFont';
import { useTheme } from '@/services/app/theme';
import { UserOutlined, LogoutOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

const MainHeader = () => {
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    const { themeAlgorithm, setThemeAlgorithm } = useTheme();
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();
    const items: MenuProps['items'] = [
        {
            key: '1',
            label: (
                <span
                    onClick={() => {
                        navigate('/user/login');
                    }}
                >
                    <LogoutOutlined style={{ marginRight: 10 }} />
                    退出登录
                </span>
            ),
        },
    ];

    return (
        <Header className={header} style={{ backgroundColor: colorBgContainer }}>
            <div style={{ flex: 1 }}></div>
            <div className={rightPanel}>
                <span className={switchDarkMode}>
                    <Popover
                        placement="bottom"
                        title="切换主题"
                        content={<ThemePanel changeTheme={() => setOpen(false)} />}
                        trigger="click"
                        open={open}
                        onOpenChange={(val) => setOpen(val)}
                    >
                        <IconFont type="icon-theme1" />
                    </Popover>
                </span>
                <span
                    className={switchDarkMode}
                    onClick={() => {
                        setTimeout(() => {
                            setThemeAlgorithm(themeAlgorithm === 'dark' ? 'light' : 'dark');
                        }, 300);
                    }}
                >
                    {themeAlgorithm === 'dark' ? <IconFont type="icon-moon2" /> : <IconFont type="icon-taiyang" />}
                </span>
                <Dropdown menu={{ items }}>
                    <div className={userPanel}>
                        <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
                        <span className={userName}>Tomas Jack</span>
                    </div>
                </Dropdown>
            </div>
        </Header>
    );
};

export default React.memo(MainHeader);
