import classNames from 'classnames/bind';
import styles from './SearchHistory.module.scss';

const cx = classNames.bind(styles);

function SearchHistory() {
    return <h4 className={cx('search')}>search return</h4>;
}

export default SearchHistory;
