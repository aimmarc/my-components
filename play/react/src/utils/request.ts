/**
 * 基础请求库
 * 针对不同协议，建议使用axios.create创造一个新的实例来使用
 */
import axios, { InternalAxiosRequestConfig, AxiosResponse } from 'axios';
import axiosRetry from 'axios-retry';

const instance = axios.create({
    baseURL: process.env.API_PREFIX,
    timeout: 20000,
    headers: {
        'Content-Type': 'application/json',
    },
});

axiosRetry(instance, { retries: 3 });

instance.interceptors.request.use(
    (conf: InternalAxiosRequestConfig) => {
        return conf;
    },
    (err) => {
        return Promise.reject(err);
    },
);

instance.interceptors.response.use(
    (response: AxiosResponse) => {
        const { data, status } = response;
        if (status === 401 || data.code === 401) {
            // jump to login
        }
        if (data.code === 10000) {
            return data.data;
        }
    },
    (err) => {
        return Promise.reject(err);
    },
);

export default instance;
