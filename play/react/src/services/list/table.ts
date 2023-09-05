/**
 * service下面放业务逻辑代码，比如对数据的处理等，尽量不要在视图层写业务代码
 */
import { listTable } from '@/apis/mock/list';
import { usePagination } from 'ahooks';

export function useTableList() {
    const { data, loading, pagination, run } = usePagination(listTable);

    return { data, loading, pagination, run };
}
