import fs from 'fs';
import { rollup } from 'rollup';
import { defaultPlugin } from './plugin.js';

// 定义删除非空目录的方法
export function rmdirALL(path) {
    try {
        // 第一步读取文件内部的文件
        let arr = fs.readdirSync(path);
        // console.log(arr);
        // 遍历数组
        for (let i = 0; i < arr.length; i++) {
            // 获取文件的状态
            let stat = fs.statSync(path + '/' + arr[i]);
            // 判断是文件还是文件夹
            if (stat.isDirectory()) {
                // 说明是文件夹  递归调用
                rmdirALL(path + '/' + arr[i]);
            } else {
                // 说明是文件
                fs.unlinkSync(path + '/' + arr[i]);
            }
        }
        // 遍历完成之后 删除最外层的文件
        fs.rmdirSync(path);
    } catch (err) {
        console.log(err);
    }
}

export async function buildCommon({
    input = {},
    plugins = defaultPlugin(),
    formats = ['es'],
    outputDir = '',
    external = [],
    clear = true,
}) {
    if (clear) rmdirALL(outputDir);
    const inputOptions = {
        input,
        plugins,
        external,
    };
    const outputOptions = {
        dir: outputDir,
        formats: formats,
    };
    const bundle = await rollup(inputOptions);
    await bundle.generate(outputOptions);
    await bundle.write(outputOptions);
}
