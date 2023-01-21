import styles from './Live.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Live() {
    console.log('render Live');

    return (
        <div className={cx('wrapper')}>
            <h3>Live</h3>
        </div>
    );
}

export default Live;
