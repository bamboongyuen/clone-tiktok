import classNames from 'classnames/bind';
import styles from './Auth.module.scss';
import PropTypes from 'prop-types';

function Input({
    name,
    placeholder = '...',
    rule,
    type = 'text',
    value,
    infor,
}) {
    const cx = classNames.bind(styles);

    return (
        <div className={cx('input-group')}>
            <p className={cx('title')}>{name}</p>
            <input
                className={cx('input')}
                type={type}
                placeholder={placeholder}
                value={value}
            />
            <p className={cx('infor')}>{infor}</p>
        </div>
    );
}

Input.propTypes = {};
export default Input;
