import classNames from 'classnames/bind';
import styles from './Auth.module.scss';
import PropTypes from 'prop-types';
import ReactModal from 'react-modal';
import Login from './Login';
import { memo, useState } from 'react';
import Signup from './Signup';

function Auth({ auth }) {
    console.log('render auth');
    const [login, setLogin] = useState(true);
    const [isAuth] = auth;
    return (
        <ReactModal
            isOpen={isAuth}
            appElement={document.getElementsByTagName('body')}
            style={{
                content: {
                    inset: '50% 10% 10% 50%',
                    transform: 'translate(-50%, -50%)',
                },
            }}
        >
            {login ? (
                <Login setLogin={setLogin} />
            ) : (
                <Signup setLogin={setLogin} />
            )}
        </ReactModal>
    );
}

Auth.propTypes = {
    children: PropTypes.node,
};
export default memo(Auth);
