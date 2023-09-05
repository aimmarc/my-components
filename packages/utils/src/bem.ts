// BEM 规范 block 代码块 element 元素 modifiler 装饰 state 状态
// t-button t-buttom__elment t-buttom__elment--mini

// 前缀名字 t-button-box__element--modifier
function _bem(prefixName: string, blockSuffix: string, element: string, modifiler: string) {
    if (blockSuffix) {
        prefixName += `-${blockSuffix}`;
    }
    if (element) {
        prefixName += `__${element}`;
    }
    if (modifiler) {
        prefixName += `--${modifiler}`;
    }
    return prefixName;
}

function createBEM(prefixName: string) {
    const b = (blockSuffix: string = '') => _bem(prefixName, blockSuffix, '', '');
    const e = (element: string = '') => (element ? _bem(prefixName, '', element, '') : '');
    const m = (modifiler: string = '') => (modifiler ? _bem(prefixName, '', '', modifiler) : '');

    const be = (blockSuffix: string = '', element: string = '') =>
        blockSuffix && element ? _bem(prefixName, blockSuffix, element, '') : '';
    const em = (element: string = '', modifiler: string = '') =>
        modifiler && element ? _bem(prefixName, '', element, modifiler) : '';
    const bm = (blockSuffix: string = '', modifiler: string = '') =>
        blockSuffix && modifiler ? _bem(prefixName, blockSuffix, '', modifiler) : '';
    const bem = (blockSuffix: string = '', element: string = '', modifiler: string = '') =>
        blockSuffix && modifiler && element
            ? _bem(prefixName, blockSuffix, element, modifiler)
            : '';
    const is = (name: string, state: boolean) => (state ? `is-${name}` : '');
    return {
        b,
        e,
        m,
        be,
        em,
        bm,
        bem,
        is,
    };
}

export function createNamespace(name: string) {
    const prefixName = `my-${name}`;
    return createBEM(prefixName);
}

/**
     //例子
    const bem = createNamespace("icon");
    console.log(bem.b("box"));
    console.log(bem.e("element"));
    console.log(bem.m("modifiler"));
    console.log(bem.bem("box", "element", "modifiler"));
    console.log(bem.be("box", "element"));
    console.log(bem.bm("box", "modifiler"));
    console.log(bem.em("element", "modifiler"));
    console.log(bem.is("checked", true));
 */
