import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainLayout from '~/component/layout/MainLayout';
import Follow from '~/component/page/Follow';
import Home from '~/component/page/Home';
import Dev from './component/page/Dev';
import Live from './component/page/Live';

const publicRoute = [
    { id: 1, path: '/', page: Home, layout: MainLayout },
    { id: 2, path: '/follow', page: Follow, layout: MainLayout },
    { id: 3, path: '/live', page: Live, layout: MainLayout },
    { id: 4, path: '/dev', page: Dev, layout: MainLayout },
];

function App() {
    return (
        <div>
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
        </div>
    );
}

export default App;
