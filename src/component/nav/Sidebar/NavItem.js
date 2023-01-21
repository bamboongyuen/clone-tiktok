import styles from './Sidebar.module.scss';
import classNames from 'classnames/bind';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);

function NavItem({ icon, title, to = '/' }) {
    return (
        <NavLink
            to={to}
            className={(nav) => cx('nav', { active: nav.isActive })}
        >
            <FontAwesomeIcon className={cx('icon')} icon={icon} />
            <span className={cx('title')}>{title}</span>
        </NavLink>
    );
}
NavItem.propTypes = {
    icon: PropTypes.object,
    title: PropTypes.string.isRequired,
    to: PropTypes.string,
};

export default NavItem;
