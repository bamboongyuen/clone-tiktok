import {
    faClose,
    faSearch,
    faSpinner,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { useEffect, useRef, useState } from 'react';
import TippyWrap from '../TippyWrap';
import styles from './Search.module.scss';
import AccountList from '~/component/other/AccountList';
import useDebounce from '~/hooks/useDebounce';

const cx = classNames.bind(styles);

const list = [
    {
        id: 168,
        to: '/follow',
        full_name: 'student Website',
        nickname: 'truongsonpt80',
        avatar: 'https://files.fullstack.edu.vn/f8-tiktok/users/168/63369821b1a38.jpg',
        bio: '✨ 1998 ✨\r\nVietnam 🇻🇳\r\nĐỪNG LẤY VIDEO CỦA TÔI ĐI SO SÁNH NỮA. XIN HÃY TÔN TRỌNG !',
        tick: false,
        followings_count: 11,
        followers_count: 3,
        likes_count: 2,
    },
];
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
        if (!input.trim()) {
            setResult([]);
            return;
        }
        setIsLoading(true);
        fetch(
            `https://tiktok.fullstack.edu.vn/api/users/search?q=${input.trim()}&type=less`,
        )
            .then((res) => res.json())
            .then((data) => {
                if (data.data.length) {
                    setResult(data.data);
                    setIsView(true);
                } else {
                    setResult([]);
                }
            })
            .catch((e) => console.log(e));

        setIsLoading(false);
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

export default Search;
