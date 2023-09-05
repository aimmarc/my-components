import React, { useState } from 'react';
import { loginWrap, loginPanel } from './Login.css';
import darkBg from '@/assets/images/dark.png';
import lightBg from '@/assets/images/light.png';
import { useTheme } from '@/services/app/theme';
import { ConfigProvider } from 'antd';
import { useLogin } from '@/services/user';
import {
    AlipayCircleOutlined,
    LockOutlined,
    MobileOutlined,
    TaobaoCircleOutlined,
    UserOutlined,
    WeiboCircleOutlined,
} from '@ant-design/icons';
import { LoginForm, ProFormCaptcha, ProFormCheckbox, ProFormText } from '@ant-design/pro-components';
import { message, Space, Tabs } from 'antd';
import type { CSSProperties } from 'react';
import appConfig from '@/constant/config/app.config';

type LoginType = 'phone' | 'account';

const iconStyles: CSSProperties = {
    marginInlineStart: '16px',
    fontSize: '24px',
    verticalAlign: 'middle',
    cursor: 'pointer',
};

/**
 * 登录页
 * @returns
 */
const Login: React.FC = (): React.ReactElement => {
    const { themeAlgorithm } = useTheme();
    const { run, loading } = useLogin();
    const [loginType, setLoginType] = useState<LoginType>('phone');

    return (
        <div className={loginWrap} style={{ backgroundImage: `url(${themeAlgorithm === 'dark' ? darkBg : lightBg})` }}>
            <div className={loginPanel}>
                <ConfigProvider theme={{ token: { borderRadius: 100 } }}>
                    <LoginForm
                        logo={appConfig.logoUrl}
                        title={appConfig.appName}
                        subTitle="全球最大的代码托管平台"
                        actions={
                            <Space>
                                其他登录方式
                                <AlipayCircleOutlined style={iconStyles} />
                                <TaobaoCircleOutlined style={iconStyles} />
                                <WeiboCircleOutlined style={iconStyles} />
                            </Space>
                        }
                        onFinish={run as () => Promise<boolean | void>}
                        loading={loading}
                    >
                        <Tabs
                            centered
                            activeKey={loginType}
                            onChange={(activeKey) => setLoginType(activeKey as LoginType)}
                        >
                            <Tabs.TabPane key={'account'} tab={'账号密码登录'} />
                            <Tabs.TabPane key={'phone'} tab={'手机号登录'} />
                        </Tabs>
                        {loginType === 'account' && (
                            <>
                                <ProFormText
                                    name="username"
                                    fieldProps={{
                                        size: 'large',
                                        prefix: <UserOutlined className={'prefixIcon'} />,
                                    }}
                                    placeholder={'用户名: admin or user'}
                                    rules={[
                                        {
                                            required: true,
                                            message: '请输入用户名!',
                                        },
                                    ]}
                                />
                                <ProFormText.Password
                                    name="password"
                                    fieldProps={{
                                        size: 'large',
                                        prefix: <LockOutlined className={'prefixIcon'} />,
                                    }}
                                    placeholder={'密码: ant.design'}
                                    rules={[
                                        {
                                            required: true,
                                            message: '请输入密码！',
                                        },
                                    ]}
                                />
                            </>
                        )}
                        {loginType === 'phone' && (
                            <>
                                <ProFormText
                                    fieldProps={{
                                        size: 'large',
                                        prefix: <MobileOutlined className={'prefixIcon'} />,
                                    }}
                                    name="mobile"
                                    placeholder={'手机号'}
                                    rules={[
                                        {
                                            required: true,
                                            message: '请输入手机号！',
                                        },
                                        {
                                            pattern: /^1\d{10}$/,
                                            message: '手机号格式错误！',
                                        },
                                    ]}
                                />
                                <ProFormCaptcha
                                    fieldProps={{
                                        size: 'large',
                                        prefix: <LockOutlined className={'prefixIcon'} />,
                                    }}
                                    captchaProps={{
                                        size: 'large',
                                    }}
                                    placeholder={'请输入验证码'}
                                    captchaTextRender={(timing, count) => {
                                        if (timing) {
                                            return `${count} ${'获取验证码'}`;
                                        }
                                        return '获取验证码';
                                    }}
                                    name="captcha"
                                    rules={[
                                        {
                                            required: true,
                                            message: '请输入验证码！',
                                        },
                                    ]}
                                    onGetCaptcha={async () => {
                                        message.success('获取验证码成功！验证码为：1234');
                                    }}
                                />
                            </>
                        )}
                        <div
                            style={{
                                marginBlockEnd: 24,
                            }}
                        >
                            <ProFormCheckbox noStyle name="autoLogin">
                                自动登录
                            </ProFormCheckbox>
                            <a
                                style={{
                                    float: 'right',
                                }}
                            >
                                忘记密码
                            </a>
                        </div>
                    </LoginForm>
                </ConfigProvider>
            </div>
        </div>
    );
};

export default Login;
