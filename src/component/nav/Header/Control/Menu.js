import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesLeft } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { useState } from 'react';
import PropTypes from 'prop-types';

import TippyWrap from '~/component/other/TippyWrap';
import styles from './Control.module.scss';

const cx = classNames.bind(styles);

function Menu({ menu = [], children }) {
    console.log('render menu');
    const [list, setList] = useState(menu);

    const handleClick = (item) => {
        if (item.children) {
            let newList = [...list];
            newList.push(item.children);
            setList(newList);
        }
    };
    const handleBack = () => {
        let newList = [...list];
        newList.splice(list.length - 1);
        setList(newList);
    };
    const handleToTop = () => {
        setList([list[0]]);
    };
    const renderMenu = () => {
        let current = list[list.length - 1];
        return (
            <TippyWrap>
                {current[0].group ? (
                    <div className={cx('header')}>
                        <span
                            className={cx('header-icon')}
                            onClick={handleBack}
                        >
                            <FontAwesomeIcon icon={faAnglesLeft} />
                        </span>
                        <span className={cx('header-name')}>
                            {current[0].group}
                        </span>
                    </div>
                ) : (
                    ''
                )}
                <div className={cx('list')}>
                    {current.map((item, index) => (
                        <div
                            key={index}
                            className={cx('item')}
                            onClick={() => handleClick(item)}
                        >
                            <span className={cx('item-icon')}>{item.icon}</span>
                            <span className={cx('title')}>{item.title}</span>
                        </div>
                    ))}
                </div>
            </TippyWrap>
        );
    };
    return (
        <Tippy
            interactive
            delay={[0, 1000]}
            render={renderMenu}
            placement="bottom-end"
            onHidden={handleToTop}
        >
            {children}
        </Tippy>
    );
}

Menu.propTypes = {
    menu: PropTypes.array,
};
export default Menu;
