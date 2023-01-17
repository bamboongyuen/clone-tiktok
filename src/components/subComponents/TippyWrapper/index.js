import classNames from 'classnames/bind';
import styles from './TippyWrapper.module.scss';

const cx = classNames.bind(styles);

function TippyWrapper({ children }) {
    return <div className={cx('wrapper')}>{children}</div>;
}

export default TippyWrapper;
