const Mock = require('mockjs');

module.exports = {
    'POST /api/user/login': (req, res) => {
        return res.send({
            message: '登录成功',
            code: 10000,
            data: null,
        });
    },
};
