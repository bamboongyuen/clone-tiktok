import { Home, Following, DefaultLayout, HeaderOnly } from '~/components';

const publicRoutes = [
    { path: '/', page: Home, layout: DefaultLayout },
    { path: '/following', page: Following, layout: HeaderOnly },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
