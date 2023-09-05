const Mock = require('mockjs');

module.exports = {
    'GET /api/dashboard/rankList': (req, res) => {
        const data = Mock.mock({
            total: 999,
            'list|5': [
                {
                    'rank|+1': 1,
                    'keyword|1-2': '关键字',
                    'userCount|1-999': 1,
                    'weekRate|0-100': 1,
                },
            ],
        });
        return res.send({
            message: '成功',
            code: 10000,
            data,
        });
    },
    'GET /api/list/table': (req, res) => {
        console.log(req.query);
        const data = Mock.mock({
            total: 999,
            [`list|${req.query.pageSize}`]: [
                {
                    'id|+1': 10000000,
                    'temp|100-5999': 1,
                    'title|1-3': '标题',
                    'state|1': ['open', 'closed', 'processing'],
                    lastDate: () => {
                        return Mock.Random.time('yyyy-MM-dd HH:mm:ss');
                    },
                    desc: () => {
                        return Mock.Random.csentence(0, 16);
                    },
                    date: '@now',
                    'labels|1': [
                        [
                            {
                                name: 'question',
                                color: 'success',
                            },
                        ],
                        [
                            {
                                name: 'bug',
                                color: 'error',
                            },
                        ],
                        [
                            {
                                name: 'dependencies',
                                color: 'default',
                            },
                        ],
                    ],
                    created_at: () => {
                        return Mock.Random.time('yyyy-MM-dd HH:mm:ss');
                    },
                    updated_at: () => {
                        return Mock.Random.time('yyyy-MM-dd HH:mm:ss');
                    },
                },
            ],
        });
        return res.send({
            message: '成功',
            code: 10000,
            data,
        });
    },
    'GET /api/list/authority': (req, res) => {
        const data = Mock.mock(['100', '101']);
        return res.send({
            message: '成功',
            code: 10000,
            data,
        });
    },
};
