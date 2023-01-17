import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';
import Header from '~/components/navs/Header';
import Sidebar from '~/components/navs/Sidebar';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <div className={cx('inner')}>
                    <Sidebar />
                    <div className={cx('content')}>{children}</div>
                </div>
            </div>
        </div>
    );
}

export default DefaultLayout;
