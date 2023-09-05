import { themeTokenAtom, themeAlgorithmAtom } from '@/store/app';
import { useRecoilState } from 'recoil';

/**
 * 主题hook封装
 * @returns
 */
export function useTheme() {
    const [themeToken, setThemeToken] = useRecoilState(themeTokenAtom);
    const [themeAlgorithm, setThemeAlgorithm] = useRecoilState(themeAlgorithmAtom);

    return {
        themeToken,
        themeAlgorithm,
        setThemeToken,
        setThemeAlgorithm,
    };
}
