import classNames from 'classnames/bind';
import styles from './AccountResult.module.scss';

const cx = classNames.bind(styles);

function AccountResult({ children }) {
    return (
        <>
            <h3 className={cx('accountHeader')}>Tài khoản</h3>
            {children.map((account, index) => (
                <div className={cx('accountItem')} key={index}>
                    <img className={cx('accountAvatar')} src={account.src} alt="avatar" />
                    <div className={cx('accountInfor')}>
                        <h4 className={cx('accountName')}>{account.name}</h4>
                        <p className={cx('accountDetail')}>{account.detail}</p>
                    </div>
                </div>
            ))}
        </>
    );
}

export default AccountResult;
