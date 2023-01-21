import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import Image from '~/component/other/Image';
import styles from './AccountList.module.scss';
import PropTypes from 'prop-types';
import Tippy from '@tippyjs/react/headless';
import AccountDetail from '../AccountDetail';

const cx = classNames.bind(styles);

function AccountList({ title, list = [], ...rest }) {
    return (
        <div className={cx('wrapper')}>
            <h5 className={cx('title')}>{title}</h5>
            {list.map((account) => (
                <Account key={account.id} {...rest}>
                    {account}
                </Account>
            ))}
        </div>
    );
}

function Account({ children }) {
    return (
        <Link
            className={cx('item')}
            to={children.to || '/@' + children.nickname}
        >
            <div>
                <Tippy
                    interactive
                    delay={[0, 500]}
                    placement="bottom-start"
                    render={() => <AccountDetail data={children} />}
                >
                    <Image src={children.avatar} css="avatar" />
                </Tippy>
            </div>
            <div className={cx('container')}>
                <div className={cx('header')}>
                    <h4 className={cx('nickname')}>{children.nickname}</h4>
                    {children.tick && (
                        <FontAwesomeIcon
                            className={cx('tick')}
                            icon={faCheckCircle}
                        />
                    )}
                </div>
                <h5 className={cx('fullname')}>{children.full_name}</h5>
            </div>
        </Link>
    );
}

AccountList.propTypes = {
    title: PropTypes.string,
    list: PropTypes.array,
};
export default AccountList;
