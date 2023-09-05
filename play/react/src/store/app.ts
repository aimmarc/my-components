import { atom } from 'recoil';
import appConfig from '@/constant/config/app.config';
import { getDefaultThemeMode, getDefaultToken, switchDarkMode } from '@/utils/theme';
export type ThemeModeType = 'light' | 'dark';
export const defaultToken = getDefaultToken() || appConfig.theme;
export const themeMode = getDefaultThemeMode() || 'light';
export const mapToken = switchDarkMode();
mapToken.borderRadius = defaultToken.borderRadius as number;
mapToken.colorPrimary = defaultToken.colorPrimary as string;

export const themeTokenAtom = atom({
    key: 'themeTokenAtom',
    default: mapToken,
});

export const themeAlgorithmAtom = atom<ThemeModeType>({
    key: 'themeAlgorithmAtom',
    default: themeMode as ThemeModeType,
});

export const collapseAtom = atom<boolean>({
    key: 'collapseAtom',
    default: false,
});

/**
 * 拥有的权限场景值
 */
export const authorityScenesAtom = atom<string[]>({
    key: 'authorityScenes',
    default: [],
});
