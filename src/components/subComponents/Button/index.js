import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button({ solid, white, text, disable, to, href, children, ...other }) {
    let Tab = 'button';
    const props = {
        ...other,
    };
    if (href !== undefined) {
        Tab = 'a';
        props.href = href;
    }
    if (to !== undefined) {
        Tab = Link;
        props.to = to;
    }
    if (disable !== undefined) {
        Object.keys(props).forEach((key) => {
            if (key.includes('on')) {
                delete props[key];
            }
        });
    }
    const classes = cx('btn', {
        solid,
        white,
        text,
        disable,
    });
    return (
        <Tab className={classes} {...props}>
            <span>{children}</span>
        </Tab>
    );
}

export default Button;
