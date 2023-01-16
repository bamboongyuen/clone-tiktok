import classNames from 'classnames/bind';
import styles from './Header.module.scss';

const cx = classNames.bind(styles);

function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('header')}>
                <h2>header</h2>
            </div>
        </header>
    );
}

export default Header;
