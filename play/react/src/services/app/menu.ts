import routerConfig, { IRouterConfig } from '@/constant/config/router.config';
import { collapseAtom } from '@/store/app';
import { MenuProps } from 'antd';
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import * as icons from '@ant-design/icons';
import appConfig from '@/constant/config/app.config';

type MenuItem = Required<MenuProps>['items'][number] & { children: MenuItem[] };

type MenuItems = MenuItem[];

const buildItems = (items: IRouterConfig[]): MenuItems => {
    return items
        .map((item: IRouterConfig) => {
            const icon = item.icon ? React.createElement((icons as never)[item.icon as never]) : ''; // React.lazy(() => import(`@ant-design/icons/${item.icon}`));
            return item.children?.length
                ? ({
                      key: item.path,
                      label: item.name,
                      children: buildItems(item.children) as MenuProps['items'],
                      icon,
                  } as MenuItem)
                : ({
                      key: item.path,
                      label: item.name,
                      icon,
                  } as MenuItem);
        })
        .filter((item: any) => item.key && item.label);
};

/**
 * siderBar hook
 * @returns
 */
export function useSiderBar() {
    const routers = routerConfig.find((x) => x.path === '/')?.children || [];
    const items = buildItems(routers);
    const navigate = useNavigate();
    const location = useLocation();
    const [selectedKeys, setKeys] = useState<string[]>([]);
    const [defaultOpenKeys, setDefaultOpenKeys] = useState<string[]>([]);
    const [collapsed, setCollapsed] = useRecoilState(collapseAtom);

    useEffect(() => {
        setKeys([location.pathname]);
        document.title = `${appConfig.appName}-${findLocationName(routers, location.pathname) || '未知页面'}`;
        const res = findOpenKeys(items);
        if (res.parentKeys.length > 0) setDefaultOpenKeys([...defaultOpenKeys, ...res.parentKeys]);
    }, [location.pathname]);

    const findLocationName = (records: IRouterConfig[], path: string) => {
        let title = '';
        records.forEach((el) => {
            if (el.path === path && !el.redirect) {
                title = el.name as string;
            } else if (el.children?.length) {
                let tmpTitle = '';
                if (el.redirect) path = el.redirect;
                tmpTitle = findLocationName(el.children, path);
                if (tmpTitle) title = tmpTitle;
            }
        });
        return title;
    };

    const handleSelect = (record: { key: string; domEvent: any }) => {
        navigate(record.key);
    };

    const handleOpen = (openKeys: string[]) => {
        setDefaultOpenKeys(openKeys);
    };

    const findOpenKeys = (list: MenuItems, parent?: MenuItem, parentKeys: string[] = []) => {
        let isOpen = false;
        list?.forEach((el) => {
            if (location.pathname === '/') {
                const targetChildren = routerConfig.find((x) => x.path === '/')?.children;
                if (targetChildren && targetChildren?.length > 0) {
                    setDefaultOpenKeys([targetChildren?.[0]?.redirect as string]);
                    return;
                }
            }
            if (el?.key === location.pathname && parent?.key) {
                isOpen = true;
                parentKeys.push(parent?.key as string);
            }
            if (el?.children && el?.children?.length > 0) {
                const res = findOpenKeys(el?.children, el, parentKeys);
                if (res.isOpen) parentKeys.push(parent?.key as string);
            }
        });
        return { isOpen, parentKeys };
    };

    return {
        items,
        collapsed,
        setCollapsed,
        handleSelect,
        handleOpen,
        selectedKeys,
        defaultOpenKeys,
    };
}
