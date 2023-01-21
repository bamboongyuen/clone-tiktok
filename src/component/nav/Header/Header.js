import { faLanguage, faPeopleGroup } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import images from '~/asset/img';
import Control from '~/component/other/Control';
import Image from '~/component/other/Image';
import Search from '~/component/other/Search';
import styles from './Header.module.scss';

const cx = classNames.bind(styles);
const menu = [
    [
        {
            icon: <FontAwesomeIcon icon={faLanguage} />,
            title: 'Tieng viet',
            children: [
                { group: 'lang', title: 'Tieng viet', code: 'vn' },
                { group: 'lang', title: 'Tieng viet', code: 'vn' },
                { group: 'lang', title: 'Tieng viet', code: 'vn' },
                { group: 'lang', title: 'Tieng viet', code: 'vn' },
                { group: 'lang', title: 'Tieng viet', code: 'vn' },
                { group: 'lang', title: 'Tieng viet', code: 'vn' },
                { group: 'lang', title: 'Tieng viet', code: 'vn' },
                { group: 'lang', title: 'Tieng viet', code: 'vn' },
                { group: 'lang', title: 'Tieng viet', code: 'vn' },
                { group: 'lang', title: 'Tieng viet', code: 'vn' },
                { group: 'lang', title: 'Tieng viet', code: 'vn' },
                { group: 'lang', title: 'Tieng viet', code: 'vn' },
                { group: 'lang', title: 'Tieng viet', code: 'vn' },
                { group: 'lang', title: 'Tieng viet', code: 'vn' },
                { group: 'lang', title: 'Tieng viet', code: 'vn' },
                { group: 'lang', title: 'Tieng viet', code: 'vn' },
                { group: 'lang', title: 'Tieng viet', code: 'vn' },
                { group: 'lang', title: 'Tieng viet', code: 'vn' },
                { group: 'lang', title: 'Tieng viet', code: 'vn' },
                { group: 'lang', title: 'Tieng viet', code: 'vn' },
                { group: 'lang', title: 'Tieng viet', code: 'vn' },
                { group: 'lang', title: 'Tieng viet', code: 'vn' },
            ],
        },
        { icon: <FontAwesomeIcon icon={faPeopleGroup} />, title: 'Ho tro' },
        { icon: <FontAwesomeIcon icon={faLanguage} />, title: 'Tieng viet' },
        { icon: <FontAwesomeIcon icon={faLanguage} />, title: 'Tieng viet' },
    ],
];
function Header({ children }) {
    console.log('render header');
    return (
        <div className={cx('wrapper')}>
            <Image className={cx('logo')} src={images.logo} />
            <Search />
            <Control menu={menu} />
        </div>
    );
}

export default Header;
