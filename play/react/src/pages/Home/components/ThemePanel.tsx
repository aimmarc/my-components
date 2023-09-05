import React from 'react';
import { colorItem, themePanel } from './ThemePanel.css';
import { useTheme } from '@/services/app/theme';

const ThemePanel: React.FC<{ changeTheme?: () => void }> = (props): React.ReactElement => {
    const colorList = ['#1677ff', '#F5222D', 'rgb(250, 84, 28)', 'rgb(250, 173, 20)', 'rgb(19, 194, 194)'];
    const { themeToken, setThemeToken } = useTheme();

    return (
        <ul className={themePanel}>
            {colorList.map((color) => (
                <li
                    className={colorItem}
                    style={{ backgroundColor: color }}
                    key={color}
                    onClick={() => {
                        setThemeToken({
                            ...themeToken,
                            colorPrimary: color,
                        });
                        if (typeof props.changeTheme === 'function') props.changeTheme();
                    }}
                ></li>
            ))}
        </ul>
    );
};

export default ThemePanel;
