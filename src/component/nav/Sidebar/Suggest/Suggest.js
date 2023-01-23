import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import AccountList from '~/component/other/AccountList';
import { searchUser } from '~/service/searchUser';

function Suggest({ sub, title }) {
    const [list, setList] = useState([]);

    useEffect(() => {
        const fet = async () => {
            let data = await searchUser(sub.trim());
            if (data.data.length) {
                setList(data.data);
            } else {
                setList([]);
            }
        };
        fet();
    }, [sub]);

    return <AccountList title={title} list={list} />;
}

Suggest.propTypes = {
    sub: PropTypes.string,
};
export default Suggest;
