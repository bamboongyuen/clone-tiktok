import styles from './Dev.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Dev({}) {
    return (
        <div className={cx('wrapper')}>
            <p className={cx('title')}>
                Chúng tôi xin lỗi vì sự bất tiện. Kính mời quý anh chị quay trở
                lại sau!
            </p>
            <p className={cx('box')}>
                <p className={cx('loader')}></p>
            </p>
        </div>
    );
}

export default Dev;
