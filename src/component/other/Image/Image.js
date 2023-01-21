import classNames from 'classnames/bind';
import styles from './Image.module.scss';
// import PropTypes from 'prop-types';
import { useState, forwardRef } from 'react';
import images from '~/asset/img';

function Image(
    {
        src,
        alt = 'no image',
        fallback: customesFallback = images.noImage,
        className,
        css,
        ...props
    },
    ref,
) {
    const [fallback, setFallback] = useState('');

    const handleError = () => {
        console.log('img cant find');
        setFallback(customesFallback);
    };
    return (
        <img
            ref={ref}
            className={classNames(styles[css], className)}
            src={fallback || src}
            alt={alt}
            {...props}
            onError={handleError}
        />
    );
}

// Image.propTypes = {
//     src: PropTypes.string,
//     alt: PropTypes.string,
//     css: PropTypes.string,
//     fallback: PropTypes.string,
// };
export default forwardRef(Image);
