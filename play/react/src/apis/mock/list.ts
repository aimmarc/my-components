/**
 * api层仅定义api请求，不做其它任意操作，视图层不要直接调用api层的方法
 */
import { IPaginationParams, IPaginationResponse } from '@/typings/api';
import request from '@/utils/request';

/**
 * 表格分页数据
 * @param params
 * @returns
 */
export async function listTable(params: IPaginationParams): Promise<IPaginationResponse<unknown>> {
    return request.get('/api/list/table', {
        params: params,
    });
}

/**
 * 排名分页数据
 * @param params
 * @returns
 */
export async function listRank(params: IPaginationParams): Promise<IPaginationResponse<unknown>> {
    return request.get('/api/dashboard/rankList', {
        params: params,
    });
}

/**
 * 获取权限场景值列表
 * @returns
 */
export async function listAuthority(): Promise<string[]> {
    return request.get('/api/list/authority');
}
