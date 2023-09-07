/**
 * 路由配置
 */
export interface IRouterConfig {
    name?: string; // 路由名称
    path?: string; // 路由路径，仅支持绝对路径，相对路径会导致导航菜单渲染异常
    component?: string; // 组件路径
    redirect?: string; // 重定向
    children?: IRouterConfig[]; // 子路由
    icon?: string;
}

const routerConfig: IRouterConfig[] = [
    {
        name: '首页',
        path: '/',
        component: '/Home',
        children: [
            {
                path: '/',
                redirect: '/dashboard',
            },
            {
                path: '/dashboard',
                name: '仪表盘',
                icon: 'DashboardOutlined',
                children: [
                    {
                        path: '',
                        redirect: '/dashboard/analysis',
                    },
                    {
                        path: '/dashboard/analysis',
                        name: '分析页',
                        component: '/dashboard/Analysis',
                    },
                ],
            },
            {
                name: '按钮',
                path: '/button/index',
                icon: 'FormOutlined',
                component: '/button/index',
            },
            {
                name: 'myRecoil',
                path: '/myRecoil/index',
                icon: 'FormOutlined',
                component: '/myRecoil/index',
            },
            {
                name: '表单',
                path: '/form',
                icon: 'FormOutlined',
                children: [
                    {
                        path: '',
                        redirect: '/form/stepForm',
                    },
                    {
                        path: '/form/stepForm',
                        name: '分步表单',
                        component: '/form/StepForm',
                    },
                    {
                        path: '/form/loginForm',
                        name: '登录表单',
                        component: '/form/LoginForm',
                    },
                    {
                        path: '/form/modalForm',
                        name: '浮层表单',
                        component: '/form/ModalForm',
                    },
                    {
                        path: '/form/filterForm',
                        name: '筛选表单',
                        component: '/form/FilterForm',
                    },
                ],
            },
            {
                name: '列表',
                path: '/list',
                icon: 'TableOutlined',
                children: [
                    {
                        path: '',
                        redirect: '/list/TableList',
                    },
                    {
                        path: '/list/tableList',
                        component: '/list/TableList',
                        name: '查询表单+数据表',
                    },
                    {
                        path: '/list/sortTable',
                        component: '/list/SortTable',
                        name: '拖拽排序数据表',
                    },
                    {
                        path: '/list/advanceList',
                        component: '/list/AdvanceList',
                        name: '高级列表',
                    },
                ],
            },
            {
                name: '布局',
                path: '/layout',
                icon: 'LayoutOutlined',
                children: [
                    {
                        path: '',
                        redirect: '/layout/dashCard',
                    },
                    {
                        path: '/layout/dashCard',
                        component: '/layout/DashCard',
                        name: '指标卡片',
                    },
                    {
                        path: '/layout/multiCard',
                        component: '/layout/MultiCard',
                        name: '多选卡片',
                    },
                    {
                        path: '/layout/waterMark',
                        component: '/layout/WaterMark',
                        name: '水印',
                    },
                    {
                        name: '第二级父级菜单',
                        path: '/layout/test',
                        icon: 'LayoutOutlined',
                        children: [
                            {
                                path: '',
                                redirect: '/layout/test/test',
                            },
                            {
                                path: '/layout/test/test',
                                component: '/layout/test/Test',
                                name: '第三级页面',
                            },
                        ],
                    },
                ],
            },
            {
                path: '/atom',
                component: '/Atom',
                name: '原子组件',
                icon: 'AppstoreAddOutlined',
            },
            {
                path: '/user/userInfo',
                component: '/User/UserInfo',
                name: '用户',
                icon: 'UserOutlined',
            },
            {
                path: '404',
            },
        ],
    },
    {
        name: '首页',
        path: 'user/login',
        component: '/User/Login',
    },
    {
        path: '404',
    },
];

export default routerConfig;
