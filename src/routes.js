import MainLayout from '~/component/layout/MainLayout';
import Follow from '~/component/page/Follow';
import Home from '~/component/page/Home';
import Dev from './component/page/Dev';
import Live from './component/page/Live';

export const publicRoute = [
    { id: 1, path: '/', page: Home, layout: MainLayout },
    { id: 2, path: '/follow', page: Follow, layout: MainLayout },
    { id: 3, path: '/live', page: Live, layout: MainLayout },
    { id: 4, path: '/dev', page: Dev, layout: MainLayout },
];
