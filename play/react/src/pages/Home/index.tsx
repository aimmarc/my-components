import React from 'react';
import { Outlet } from 'react-router-dom';
import { Layout } from 'antd';
import SiderBar from './components/SiderBar';
import { content } from './index.css';
import { useRecoilValue } from 'recoil';
import { collapseAtom } from '@/store/app';
import appConfig from '@/constant/config/app.config';
import MainHeader from './components/MainHeader';
const { Content } = Layout;

const Home: React.FC = (): React.ReactElement => {
    const collapsed = useRecoilValue(collapseAtom);

    return (
        <Layout>
            <SiderBar />
            <Layout
                style={{
                    marginLeft: collapsed ? appConfig.siderWidth.fold : appConfig.siderWidth.open,
                    minHeight: '100vh',
                    transition: 'all 0.3s',
                }}
            >
                <MainHeader />
                <Layout>
                    <Content className={content}>
                        <Outlet />
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    );
};

export default Home;
