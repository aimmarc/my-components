import { Button, Result } from 'antd';
import React from 'react';

const NotFound: React.FC = () => {
    return (
        <Result
            status={404}
            title="404 Not Found"
            subTitle="糟糕，页面不见啦～～～"
            extra={
                <Button href="/" type="primary">
                    返回首页
                </Button>
            }
        ></Result>
    );
};

export default NotFound;
