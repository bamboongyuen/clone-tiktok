import { faCloudArrowUp, faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import { faFighterJet, faMessage } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { useContext } from 'react';

import Button from '~/component/other/Button';
import Image from '~/component/other/Image';
import styles from './Control.module.scss';
import { AppContext } from '~/App';
import Menu from './Menu';

const cx = classNames.bind(styles);

function Control({ infor = '', avatar = '' }) {
    const [profile, setProfile] = useContext(AppContext).profile;

    const handleClick = () => {
        if (profile.id) {
            setProfile({});
        } else {
            setProfile({ id: 1, nickname: 'npc', detail: 'i do nothing!' });
        }
    };
    return (
        <div className={cx('wrapper')}>
            {infor ? (
                <>
                    <Tippy content="Upload">
                        <button className={cx('icon')}>
                            <FontAwesomeIcon icon={faCloudArrowUp} />
                        </button>
                    </Tippy>
                    <Tippy content="Message">
                        <button className={cx('icon')}>
                            <FontAwesomeIcon icon={faMessage} />
                        </button>
                    </Tippy>
                    <Tippy content="Notify">
                        <button className={cx('icon')}>
                            <FontAwesomeIcon icon={faFighterJet} />
                        </button>
                    </Tippy>
                </>
            ) : (
                <>
                    <Button css="outline">Upload</Button>
                    <Button onClick={handleClick}>Login</Button>
                </>
            )}
            <div className={cx('menu')}>
                <Menu>
                    {infor ? (
                        <Image src={avatar} css="avatar" />
                    ) : (
                        <FontAwesomeIcon icon={faEllipsisV} />
                    )}
                </Menu>
            </div>
        </div>
    );
}

Control.propTypes = {
    menu: PropTypes.array,
    infor: PropTypes.string,
    avatar: PropTypes.string,
};
export default Control;
