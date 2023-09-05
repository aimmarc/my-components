/**
 * 驼峰转换为短横线
 * @param str 
 * @returns 
 */
export function getKebabCase(str: string) {
    return str.replace(/[A-Z]/g, function (i) {
        return '-' + i.toLowerCase();
    });
}

/**
 * 获取url参数
 * @param variable
 * @returns
 */
export function getQueryVariable(variable: string) {
    const query = location.href.split('?')[1] || '';
    const vars = query.split('&');
    for (let i = 0; i < vars.length; i++) {
        const pair = vars[i].split('=');
        if (pair[0] == variable) {
            return pair[1];
        }
    }
    return false;
}
