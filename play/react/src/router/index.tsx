import React from 'react';
import {
    BrowserRouter,
    Route,
    Routes,
    Navigate,
    Outlet,
} from 'react-router-dom';
import routerConfig, { IRouterConfig } from '@/constant/config/router.config';

const NotFound = React.lazy(() => import('@/pages/404'));
const Wrap = () => {
    return (
        <>
            <Outlet />
        </>
    );
};

/**
 * 根据配置生成路由
 * @param routes
 * @returns
 */
const buildRouter = (routes: IRouterConfig[]) => {
    return routes.map((route, index) => {
        if (route.path === '404') {
            return <Route path="*" element={<NotFound />} key={index} />;
        }
        if (route.redirect) {
            return (
                <Route
                    path={route.path}
                    key={route.path || index}
                    element={<Navigate to={route.redirect} />}
                />
            );
        } else if (route.path) {
            const RouterComponent = route.component
                ? React.lazy(() => import(`@/pages${route.component}`))
                : Wrap;
            return (
                <Route
                    path={route.path}
                    element={
                        <React.Suspense>
                            <RouterComponent />
                        </React.Suspense>
                    }
                    key={route.path}
                >
                    {route.children?.length
                        ? buildRouter(route.children)
                        : null}
                </Route>
            );
        }
        return null;
    });
};

const BaseRouter = () => (
    <BrowserRouter>
        <Routes>{buildRouter(routerConfig)}</Routes>
    </BrowserRouter>
);

export default BaseRouter;
