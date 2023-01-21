import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Button.module.scss';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);

function Button({ to, href, css, leftIcon, rightIcon, children, ...rest }) {
    let Type = 'button';
    const classes = cx('btn', css);
    const props = {
        to,
        href,
        ...rest,
    };
    if (href) {
        Type = 'a';
    }
    if (to) {
        Type = Link;
    }
    return (
        <Type className={classes} {...props}>
            <span className={cx('leftIcon')}>{leftIcon}</span>
            <span className={cx('title')}>{children}</span>
            <span className={cx('rightIcon')}>{rightIcon}</span>
        </Type>
    );
}

Button.propTypes = {
    to: PropTypes.string,
    href: PropTypes.string,
    css: PropTypes.string,
    children: PropTypes.node.isRequired,
    leftIcon: PropTypes.element,
    rightIcon: PropTypes.element,
};

export default Button;
