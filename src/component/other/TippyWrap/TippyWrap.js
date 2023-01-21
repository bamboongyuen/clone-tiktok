import classNames from 'classnames/bind';
import styles from './TippyWrap.module.scss';
import PropTypes from 'prop-types';

function TippyWrap({ children }) {
    return <div className={classNames(styles.wrapper)}>{children}</div>;
}

TippyWrap.propTypes = {
    children: PropTypes.node,
};
export default TippyWrap;
