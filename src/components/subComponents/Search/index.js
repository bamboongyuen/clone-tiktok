import classNames from 'classnames/bind';
import { useState, useEffect } from 'react';
import Tippy from '@tippyjs/react/headless';
import '~/asses/iconfont/icofont.css';
import TippyWrapper from '~/components/subComponents/TippyWrapper';
import AccountResult from '~/components/subComponents/AccountResult';
import styles from './Search.module.scss';

const cx = classNames.bind(styles);

function Search() {
    console.log('render search ..');
    const [input, setInput] = useState('');
    const [searchResult, setSearchResult] = useState([]);

    const accounts = [
        {
            src: 'https://p19-sign.tiktokcdn-us.com/tos-useast5-avt-0068-tx/ad1488f34ba327bc25030255a08469fa~c5_100x100.jpeg?x-expires=1674057600&x-signature=Ec5B6uU%2Bq8QBBOsoOF%2F5veV0vNM%3D',
            name: 'Nguyen van Dat',
            detail: 'khong co gi ca.',
        },
        {
            src: 'https://p19-sign.tiktokcdn-us.com/tos-useast5-avt-0068-tx/ad1488f34ba327bc25030255a08469fa~c5_100x100.jpeg?x-expires=1674057600&x-signature=Ec5B6uU%2Bq8QBBOsoOF%2F5veV0vNM%3D',
            name: 'Nguyen van Dat',
            detail: 'khong co gi ca.',
        },
    ];

    const handleChange = (e) => {
        setInput(e.target.value);
    };
    const handleClear = () => {
        setInput('');
    };
    const handleSearch = () => {
        setSearchResult(accounts);
    };

    useEffect(() => {
        if (input.length > 4) {
            setSearchResult(accounts);
        } else {
            setSearchResult([]);
        }
    }, [input]);
    return (
        <Tippy
            interactive
            visible={searchResult.length > 0}
            render={(attrs) => (
                <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                    <TippyWrapper>
                        <AccountResult>{searchResult}</AccountResult>
                    </TippyWrapper>
                </div>
            )}
        >
            <div className={cx('search')}>
                <input
                    className={cx('input')}
                    onChange={handleChange}
                    placeholder="Search accounts and videos.."
                    value={input}
                />
                <button className={cx('btn', 'btn-clear', input || 'hide')} onClick={handleClear}>
                    <i className="icofont-brand-nexus"></i>
                </button>

                <button className={cx('btn', 'btn-search')} onClick={handleSearch}>
                    <i className="icofont-search"></i>
                </button>
            </div>
        </Tippy>
    );
}

export default Search;
