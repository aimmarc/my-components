import request from '@/utils/request';

/**
 * 登录
 * @param data
 * @returns
 */
export async function userLogin(data: { username: string; password: string }) {
    return request.post('/api/user/login', {
        data,
    });
}
