import React from 'react';
import { Drawer, Button, Typography } from 'antd';
import { SettingPanelCss } from './index.css';
import { useTheme } from '@/services/app/theme';

const { Title } = Typography;

export interface ISettingPanelProps {
    open: boolean;
    onClose: () => void;
}

const SettingPanel: React.FC<ISettingPanelProps> = (
    props,
): React.ReactElement => {
    const { themeToken, setThemeToken } =
        useTheme();
    const colorList = [
        '#1677ff',
        '#F5222D',
        'rgb(250, 84, 28)',
        'rgb(250, 173, 20)',
        'rgb(19, 194, 194)',
    ];
    return (
        <Drawer
            title="设置"
            open={props.open}
            className={SettingPanelCss}
            onClose={props.onClose}
        >
            <Title level={5}>颜色</Title>
            <ul>
                {colorList.map((color) => (
                    <li
                        key={color}
                        style={{
                            backgroundColor: color,
                            width: '22px',
                            height: '22px',
                        }}
                        onClick={() => {
                            setThemeToken({
                                ...themeToken,
                                colorPrimary: color,
                            });
                        }}
                    ></li>
                ))}
            </ul>
        </Drawer>
    );
};

export default SettingPanel;
