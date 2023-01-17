import classNames from 'classnames/bind';
import '~/asses/iconfont/icofont.css';
import img from '~/asses/img/';
import styles from './Header.module.scss';
import Search from './Search';
import Button from '~/components/subComponents/Button';
import { useState } from 'react';
import More from './More';

const cx = classNames.bind(styles);

function Header() {
    console.log('render header');
    const [isAuth, setIsAuth] = useState(false);

    return (
        <header className={cx('wrapper')}>
            <div className={cx('header')}>
                <div className={cx('logo')}>
                    <img src={img.logo} alt="logo" />
                </div>

                <Search />

                <div className={cx('controls')}>
                    {isAuth === false ? (
                        <>
                            <Button white to="/" onClick={() => console.log('ccc')}>
                                <i className="icofont-plus"> </i>
                                <span> Tải lên</span>
                            </Button>
                            <Button solid to="/" onClick={() => setIsAuth(true)}>
                                Đăng nhập
                            </Button>
                        </>
                    ) : (
                        <></>
                    )}

                    <More />
                </div>
            </div>
        </header>
    );
}

export default Header;
