import request from '@/utils/request';

export function listMenuData() {
    return request.get('/api/menuData');
}