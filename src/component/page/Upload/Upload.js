import styles from './Upload.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);
function Upload({ children }) {
    console.log('render Upload');

    return (
        <div className={cx('wrapper')}>
            <h3>Upload</h3>
        </div>
    );
}

export default Upload;
