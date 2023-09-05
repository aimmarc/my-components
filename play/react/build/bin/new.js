const chalk = require('chalk');
const path = require('path');
const fs = require('fs');
const type = process.argv[2];
const name = process.argv[3];
const pathConfig = {
    page: '/src/pages',
    component: '/src/components',
    router: '/src/router',
    service: '/src/service',
};
const log = console.log;

if (!type) {
    log(chalk.bold.red('[创建类型]必填 - 请输入要创建的类型[page|component]'));
    process.exit(1);
}

if (!name) {
    log(chalk.bold.red('[模块名称]必填 - 请输入要创建的模块名称'));
    process.exit(1);
}

if (!['page', 'component'].includes(type)) {
    log(chalk.bold.red('[创建类型]只能是[page|component]'));
    process.exit(1);
}

function createFile() {
    const targetPath = type === 'page' ? pathConfig.page : pathConfig.component;
    const componentCode = `
    import React from 'react';
    import { ${name}Css } from './index.css';

    const ${name}: React.FC = (): React.ReactElement => {
        return <div className={${name}Css}>${name}</div>
    }

    export default ${name};
    `;
    const cssCode = `
    import { style } from '@vanilla-extract/css';

    export const ${name}Css = style({
        // type css code...
    });
    `;
    const dir = path.join(__dirname, '../..', targetPath);
    fs.readdir(dir, (err, files) => {
        if (err) {
            throw err;
        }
        if (!files.includes(name)) {
            fs.mkdirSync(path.join(dir, name));
            fs.writeFileSync(
                path.join(dir, name, '/', 'index.tsx'),
                componentCode,
                { flag: 'a' },
                (err) => {
                    if (err) log(chalk.bold.red(err));
                },
            );
            fs.writeFileSync(
                path.join(dir, name, '/', 'index.css.ts'),
                cssCode,
                { flag: 'a' },
                (err) => {
                    if (err) log(chalk.bold.red(err));
                },
            );
            log(chalk.bold.green(`${type} 创建成功`));
        } else {
            log(chalk.bold.red(`${type} is already exists`));
            process.exit(1);
        }
    });
}

createFile();
