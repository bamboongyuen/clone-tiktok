import styles from './Home.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);
function Home({ children }) {
    console.log('render home');

    return (
        <div className={cx('wrapper')}>
            <h3>home</h3>
        </div>
    );
}

export default Home;
