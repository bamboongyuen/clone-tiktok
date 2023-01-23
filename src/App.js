import { createContext, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainLayout from '~/component/layout/MainLayout';
import Follow from '~/component/page/Follow';
import Home from '~/component/page/Home';
import Auth from './component/other/Auth';
import Dev from './component/page/Dev';
import Live from './component/page/Live';

export const AppContext = createContext();

function App() {
    const publicRoute = [
        { id: 1, path: '/', page: Home, layout: MainLayout },
        { id: 2, path: '/follow', page: Follow, layout: MainLayout },
        { id: 3, path: '/live', page: Live, layout: MainLayout },
        { id: 4, path: '/dev', page: Dev, layout: MainLayout },
    ];
    const [profile, setProfile] = useState({});
    const [isAuth, setIsAuth] = useState(true);

    return (
        <AppContext.Provider
            value={{
                profile: [profile, setProfile],
                auth: [isAuth, setIsAuth],
            }}
        >
            <BrowserRouter>
                <Routes>
                    {publicRoute.map((route) => {
                        const Layout = route.layout;
                        const Page = route.page;
                        return (
                            <Route
                                key={route.id}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Routes>
            </BrowserRouter>
            <Auth auth={[isAuth, setIsAuth]} />
        </AppContext.Provider>
    );
}

export default App;
