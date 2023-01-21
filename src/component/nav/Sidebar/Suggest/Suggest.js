import classNames from 'classnames/bind';
import styles from './Suggest.module.scss';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import AccountList from '~/component/other/AccountList';

function Suggest({ sub, title }) {
    const [list, setList] = useState([]);

    useEffect(() => {
        fetch(
            `https://tiktok.fullstack.edu.vn/api/users/search?q=${sub.trim()}&type=less`,
        )
            .then((res) => res.json())
            .then((data) => {
                if (data.data.length) {
                    setList(data.data);
                } else {
                    setList([]);
                }
            })
            .catch((e) => console.log(e));
    }, []);

    return <AccountList title={title} list={list} />;
}

Suggest.propTypes = {
    sub: PropTypes.string,
};
export default Suggest;
