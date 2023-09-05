module.exports = {
    '/api': {
        target: 'http://localhost:8080', //这个是被替换的目标地址
        secure: true, //接受对方是https的接口
        changeOrigin: true, // 是否需要跨域
    },
};
