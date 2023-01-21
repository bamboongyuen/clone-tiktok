import styles from './Sidebar.module.scss';
import classNames from 'classnames/bind';
import Box from './Box';
import {
    faCamera,
    faHomeUser,
    faPeopleGroup,
} from '@fortawesome/free-solid-svg-icons';
import NavItem from './NavItem';
import Button from '~/component/other/Button';
import Suggest from './Suggest';
import { list } from '~/config/list';

const cx = classNames.bind(styles);

function Sidebar({}) {
    //nav
    //login
    //account
    //discovery
    //infor

    return (
        <div className={cx('wrapper')}>
            <Box>
                <NavItem to="/" title="Dành cho bạn" icon={faHomeUser} />
                <NavItem to="/follow" title="Following" icon={faPeopleGroup} />
                <NavItem to="/live" title="LIVE" icon={faCamera} />
            </Box>
            <Box css="df">
                <p className={cx('text')}>
                    Đăng nhập để follow các tác giả, thích video và xem bình
                    luận.
                </p>
                <Button css={'outline-red'}>Login</Button>
            </Box>
            <Box>
                <Suggest sub={'te'} title={'Suggest account'} />
            </Box>
            <Box>
                <Suggest sub={'son'} title={'Following'} />
            </Box>

            <Box>
                <p className={cx('title')}>Kham pha</p>
                {list.map((item, index) => (
                    <Button key={index} css={'trend'}>
                        {item}
                    </Button>
                ))}
            </Box>
            <Box>
                {list.map((item, index) => (
                    <Button key={index} css={'link'} to="/dev">
                        {item}
                    </Button>
                ))}
            </Box>
        </div>
    );
}

export default Sidebar;
