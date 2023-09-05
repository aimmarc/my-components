import { StorageEnum } from '@/constant/enum/storage';
import { atom } from 'recoil';

export interface IUserInfo {
    username: string;
    isLogin: boolean;
    role: string | string[];
    avatar: string;
}

export interface IUserStore {
    collapsed: boolean;
    userInfo: IUserInfo;
}

function getDefaultUserInfo() {
    const userInfo: IUserInfo = JSON.parse(
        sessionStorage.getItem(StorageEnum.userInfo) ||
            JSON.stringify({
                username: '',
                isLogin: false,
            }),
    );
    return userInfo;
}

/**
 * 用户信息
 */
const userInfoState = atom<IUserInfo>({
    key: 'userInfoState',
    default: getDefaultUserInfo(),
});

export { userInfoState };
