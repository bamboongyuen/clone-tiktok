import classNames from 'classnames/bind';

import Image from '~/component/other/Image';
import images from '~/asset/img';
import Control from './Control';
import Search from './Search';
import styles from './Header.module.scss';
import { publicMenu, privateMenu } from '~/config/menu';

const cx = classNames.bind(styles);

function Header() {
    console.log('render header');
    return (
        <div className={cx('wrapper')}>
            <Image className={cx('logo')} src={images.logo} />
            <Search />
            <Control menu={publicMenu} />
        </div>
    );
}

export default Header;
