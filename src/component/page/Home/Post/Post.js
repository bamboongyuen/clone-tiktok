import { faCommentDots, faShare } from '@fortawesome/free-solid-svg-icons';
import { faCheckCircle, faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import Tippy from '@tippyjs/react/headless';

import styles from './Post.module.scss';
import Image from '~/component/other/Image';
import Button from '~/component/other/Button';
import Infor from './Infor';
import AccountDetail from '~/component/other/AccountDetail';

const cx = classNames.bind(styles);

function Post({ data }) {
    return (
        <div className={cx('container')}>
            <div className={cx('icon')}>
                <Tippy
                    interactive
                    delay={[0, 500]}
                    placement="bottom-start"
                    render={() => <AccountDetail data={data} />}
                >
                    <Image src={data.avatar} css="avatar" />
                </Tippy>
            </div>

            <div className={cx('button')}>
                <Button css="outline-red">Follow</Button>
            </div>
            <div className={cx('content')}>
                <h3 className={cx('title')}>
                    {data.nickname}{' '}
                    {!data.tick && (
                        <FontAwesomeIcon
                            className={cx('tick')}
                            icon={faCheckCircle}
                        />
                    )}
                </h3>

                <p className={cx('text')}>{data.bio}</p>
                <p className={cx('text')}>{data.avatar}</p>
                <div className={cx('view')}>
                    <video className={cx('video')} />
                    <div className={cx('infor')}>
                        <Infor icon={faHeart} value={data.likes_count} />
                        <Infor
                            icon={faCommentDots}
                            value={data.followers_count}
                        />
                        <Infor icon={faShare} value={data.followings_count} />
                    </div>
                </div>
            </div>
        </div>
    );
}

Post.propTypes = {
    data: PropTypes.object,
};
export default Post;
