import React, { PropsWithChildren, useState } from 'react';
import { PageWrapCss, PageInnerCss, PageHeaderCss, titlePanel } from './index.css';
import { theme, Breadcrumb, Typography } from 'antd';
import { useLocation } from 'react-router-dom';
import { useMount } from 'ahooks';
import routerConfig, { IRouterConfig } from '@/constant/config/router.config';

const { Title } = Typography;

interface IPageWrapProps extends PropsWithChildren {
    transparent?: boolean;
    extra?: React.ReactElement;
}

const PageWrap: React.FC<IPageWrapProps> = (props): React.ReactElement => {
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    const location = useLocation();
    const [breads, setBreads] = useState<{ title: any }[]>([]);
    useMount(() => {
        const res = findBreads(routerConfig, null);
        setBreads(
            res.map((item, index) => ({
                title: index < res.length - 1 ? <a href={item.path}>{item.name}</a> : item.name,
            })),
        );
    });

    const findBreads = (routes: IRouterConfig[], parent: IRouterConfig | null, targets: IRouterConfig[] = []) => {
        routes.forEach((el) => {
            if (el.path === location.pathname) {
                targets.push(el);
            } else if (el.children?.length) {
                const tmpTargets = findBreads(el.children, el);
                if (tmpTargets.length > 0) {
                    targets.push(el, ...tmpTargets);
                }
            }
        });
        return targets;
    };

    return (
        <div className={PageWrapCss}>
            <div className={PageHeaderCss}>
                <Breadcrumb items={breads}></Breadcrumb>
                <div className={titlePanel}>
                    <Title level={3}>{breads[breads.length - 1]?.title}</Title>
                    <div>{props.extra}</div>
                </div>
            </div>
            <div
                className={PageInnerCss}
                style={{
                    backgroundColor: props.transparent ? 'transparent' : colorBgContainer,
                    padding: props.transparent ? 0 : 20,
                }}
            >
                {props?.children}
            </div>
        </div>
    );
};

export default PageWrap;
