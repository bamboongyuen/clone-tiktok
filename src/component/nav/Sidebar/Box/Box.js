import classNames from 'classnames/bind';
import styles from './Box.module.scss';
import PropTypes from 'prop-types';

function Box({ css, children }) {
    return (
        <div className={classNames(styles.container, styles[css])}>
            {children}
        </div>
    );
}

Box.propTypes = {
    children: PropTypes.node,
};
export default Box;
