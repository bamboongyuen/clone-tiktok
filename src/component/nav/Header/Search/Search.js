import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { faClose, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { useEffect, useRef, useState, memo } from 'react';

import useDebounce from '~/hooks/useDebounce';
import TippyWrap from '~/component/other/TippyWrap';
import AccountList from '~/component/other/AccountList';
import styles from './Search.module.scss';
import { searchUser } from '~/service/searchUser';

const cx = classNames.bind(styles);

function Search() {
    console.log('render search');
    const [input, setInput] = useState('');
    const [result, setResult] = useState([]);
    const [isView, setIsView] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const inputDebounce = useDebounce(input, 500);

    const inputRef = useRef();

    const handleType = (e) => {
        setInput(e.target.value.trimStart());
    };
    const handleClear = () => {
        setInput('');
        setResult([]);
        inputRef.current.focus();
    };
    const renderTippy = () => {
        //accountList
        return (
            <TippyWrap>
                <AccountList title="Account list" list={result} />
            </TippyWrap>
        );
    };
    useEffect(() => {
        if (!inputDebounce.trim()) {
            setResult([]);
            return;
        }
        setIsLoading(true);
        const fet = async () => {
            try {
                let data = await searchUser(inputDebounce);
                console.log(data);
                if (data.data.length) {
                    setResult(data.data);
                    setIsView(true);
                } else {
                    setResult([]);
                }
            } catch (error) {}
            setIsLoading(false);
        };
        fet();
        // fetch(
        //     `https://tiktok.fullstack.edu.vn/api/users/search?q=${input.trim()}&type=less`,
        // )
        //     .then((res) => res.json())
        //     .then((data) => {
        //         if (data.data.length) {
        //             setResult(data.data);
        //             setIsView(true);
        //         } else {
        //             setResult([]);
        //         }
        //     })
        //     .catch((e) => console.log(e));
    }, [inputDebounce]);
    return (
        <div>
            <Tippy
                visible={result.length && isView}
                interactive
                placement="bottom-start"
                render={renderTippy}
                onClickOutside={() => setIsView(false)}
            >
                <div className={cx('wrapper')}>
                    <input
                        className={cx('input')}
                        placeholder="..."
                        value={input}
                        ref={inputRef}
                        onChange={handleType}
                        onFocus={() => setIsView(true)}
                    />
                    {input ? (
                        isLoading ? (
                            <FontAwesomeIcon
                                className={cx('spinner')}
                                icon={faSpinner}
                            />
                        ) : (
                            <FontAwesomeIcon
                                className={cx('clear')}
                                icon={faClose}
                                onClick={handleClear}
                            />
                        )
                    ) : (
                        ''
                    )}

                    <div className={cx('search')}>
                        <FontAwesomeIcon icon={faSearch} />
                    </div>
                </div>
            </Tippy>
        </div>
    );
}

export default memo(Search);
