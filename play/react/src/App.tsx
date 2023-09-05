import React from 'react';
import { app } from './assets/styles/app.css';
import BaseRouter from './router';
import { useMount } from 'ahooks';
import { useAuthority } from './services/app/authority';
import { listAuthority } from './apis/mock/list';
import AppProvider from './providers/AppProvider';

const App: React.FC = (): React.ReactElement => {
    const { setAuthorityScenes } = useAuthority();

    useMount(async () => {
        const data = await listAuthority();
        setAuthorityScenes(data);
    });

    return (
        <AppProvider>
            <div className={app}>
                <BaseRouter />
            </div>
        </AppProvider>
    );
};

export default App;
