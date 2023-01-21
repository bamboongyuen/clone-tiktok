import classNames from 'classnames/bind';
import styles from './Infor.module.scss';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const cx = classNames.bind(styles);

function Infor({ icon, value }) {
    return (
        <div className={cx('item')}>
            <span className={cx('icon')}>
                <FontAwesomeIcon icon={icon} />
            </span>
            <span className={cx('value')}>{value}</span>
        </div>
    );
}

Infor.propTypes = {
    icon: PropTypes.object,
    value: PropTypes.number,
};
export default Infor;
