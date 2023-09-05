import { userLogin } from '@/apis/mock/user';
import { StorageEnum } from '@/constant/enum/storage';
import { IUserInfo, userInfoState } from '@/store/user';
import useAtomState from '@/utils/hooks/useAtomState';
import { useRequest } from 'ahooks';
import { useNavigate } from 'react-router-dom';
import { SetterOrUpdater } from 'recoil';

/**
 * 用户信息
 * @returns
 */
const useUserInfo = (): [IUserInfo, SetterOrUpdater<IUserInfo>] => {
    const [userInfo, setUserInfo] = useAtomState(userInfoState, (state) => {
        sessionStorage.setItem(StorageEnum.userInfo, JSON.stringify(state));
    });
    return [userInfo, setUserInfo];
};

/**
 * 登录
 * @returns
 */
const useLogin = () => {
    const navigate = useNavigate();
    const { run, loading } = useRequest(userLogin, {
        manual: true,
        onSuccess: () => {
            navigate('/');
        },
    });

    return { run, loading };
};

export { useLogin, useUserInfo };
