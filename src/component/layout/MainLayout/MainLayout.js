import classNames from 'classnames/bind';
import Header from '~/component/nav/Header';
import Sidebar from '~/component/nav/Sidebar';
import styles from './MainLayout.module.scss';

const cx = classNames.bind(styles);

function MainLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <Header />
            </div>
            <div className={cx('container')}>
                <div className={cx('sidebar')}>
                    <Sidebar />
                </div>
                <div className={cx('page')}>{children}</div>
            </div>
        </div>
    );
}

export default MainLayout;
