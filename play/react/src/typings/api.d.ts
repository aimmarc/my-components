/**
 * 与接口请求相关的类型声明
 */

// 分页数据请求参数
export interface IPaginationParams {
    current: number;
    pageSize: number;
}

// 分页数据请求结果
export interface IPaginationResponse<T> {
    total: number;
    list: T[];
}
