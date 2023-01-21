import classNames from 'classnames/bind';
import styles from './AccountDetail.module.scss';
import PropTypes from 'prop-types';
import TippyWrap from '../TippyWrap';
import Image from '../Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Button from '../Button';

const cx = classNames.bind(styles);

function AccountDetail({ data }) {
    return (
        <TippyWrap>
            <div className={cx('container')}>
                <div className={cx('banner')}>
                    <Image src={data.avatar} css="avatar" />
                    <Button css="outline-red">Follow</Button>
                </div>
                <div className={cx('header')}>
                    <h4 className={cx('nickname')}>{data.nickname}</h4>
                    {!data.tick && (
                        <FontAwesomeIcon
                            className={cx('tick')}
                            icon={faCheckCircle}
                        />
                    )}
                </div>
                <h5 className={cx('fullname')}>{data.full_name}</h5>
                <div>
                    <strong className={cx('number')}>
                        {data.followings_count}
                    </strong>
                    <span className={cx('text')}> Follow</span>
                    <strong className={cx('number')}>
                        {data.followers_count}
                    </strong>
                    <span className={cx('text')}> Like</span>
                </div>
                <hr className={cx('line')}></hr>
                <p className={cx('infor')}>{data.bio}</p>
            </div>
        </TippyWrap>
    );
}

AccountDetail.propTypes = {
    data: PropTypes.object,
};
export default AccountDetail;
