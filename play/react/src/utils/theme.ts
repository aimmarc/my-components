import { AliasToken } from 'antd/lib/theme/interface';
import appConfig from '@/constant/config/app.config';
import { StorageEnum } from '@/constant/enum/storage';
import { CssVarsEnum } from '@/constant/enum/style';

/**
 * 获取默认主题配置
 * @returns
 */
export function getDefaultToken() {
    try {
        const defaultToken = localStorage.getItem(StorageEnum.themeToken);
        return JSON.parse(defaultToken as string) as Partial<AliasToken>;
    } catch (err) {
        return undefined;
    }
}

/**
 * 获取默认主题模式
 * @returns
 */
export function getDefaultThemeMode() {
    return localStorage.getItem(StorageEnum.themeMode);
}

/**
 * 切换暗黑模式
 * @returns
 */
export function switchDarkMode() {
    const defaultToken = getDefaultToken() || appConfig.theme;
    return defaultToken;
}

/**
 * 构建css变量，提供给vanilla使用，感觉不是很优雅，后续看看有没有其它方式
 * @param token
 */
export function buildCssVars(token: Partial<AliasToken>) {
    for (let key in token) {
        const val = token[key as never] as any;
        if (
            document.documentElement.style.getPropertyPriority(`--${key}`) === val ||
            val?.toString() === 'NaN' ||
            !appConfig.theme.varKeys.includes(key as CssVarsEnum)
        ) {
            continue;
        }
        document.documentElement.style.setProperty(`--${key}`, val);
    }
}
