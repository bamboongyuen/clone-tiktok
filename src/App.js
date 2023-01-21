import {
    faHome,
    faHomeUser,
    faPeopleGroup,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { BrowserRouter, Link, NavLink, Route, Routes } from 'react-router-dom';
import { publicRoute } from '~/routes';

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
