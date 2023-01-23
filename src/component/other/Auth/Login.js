import classNames from 'classnames/bind';
import styles from './Auth.module.scss';
import PropTypes from 'prop-types';
import Button from '../Button';
import { AppContext } from '~/App';
import Input from './Input';
import { useState } from 'react';

function Login() {
    const cx = classNames.bind(styles);
    const [user, setUser] = useState('asdf');
    const [pass, setPass] = useState('asdf');
    const [infor, setInfor] = useState('asdf');

    return (
        <div className={cx('wrapper')}>
            <strong className={cx('header')}>Login form</strong>
            <Input
                name={'Username'}
                placeholder={'Nhập tài khoản...'}
                value={user}
                infor={infor}
            />
            <Input
                name={'Password'}
                placeholder={'Nhập password...'}
                type={'password'}
                value={user}
                infor={infor}
            />
            <Button>login</Button>
            <Button onClick={'j'}>close</Button>
        </div>
    );
}

Login.propTypes = {};
export default Login;
