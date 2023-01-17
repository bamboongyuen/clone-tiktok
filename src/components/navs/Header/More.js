import classNames from 'classnames/bind';
import '~/asses/iconfont/icofont.css';
import styles from './Header.module.scss';

const cx = classNames.bind(styles);
function More() {
    return (
        <>
            <i className={cx('menu-icon', 'icofont-navigation-menu')}></i>
            <ul className={cx('menu-list')}>
                <li className={cx('menu-item')}>
                    <i className={cx('icon', 'icofont-at')}></i>
                    <span>Tiếng việt</span>
                </li>
                <li className={cx('menu-item')}>
                    <i className={cx('icon', 'icofont-question')}></i>
                    <span>Phản hồi và trợ giúp</span>
                </li>
                <li className={cx('menu-item')}>
                    <i className={cx('icon', 'icofont-ui-keyboard')}></i>
                    <span>Phím tắt trên bàn phím</span>
                </li>
                <li className={cx('menu-item')}>
                    <i className={cx('icon', 'icofont-moon')}></i>
                    <span>Chế độ tối</span>
                </li>
            </ul>
        </>
    );
}

export default More;
