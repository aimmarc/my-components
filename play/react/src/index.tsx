import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { RecoilRoot } from 'recoil';
import appConfig from './constant/config/app.config';
import './assets/styles/reset.css';
import './assets/styles/global.css';

const container = document.getElementById('root');
const root = createRoot(container as Element);
console.log('process.env.NODE_ENV:', appConfig.NodeEnv);
root.render(
    <RecoilRoot>
        <App />
    </RecoilRoot>,
);
