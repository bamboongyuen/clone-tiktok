import styles from './Home.module.scss';
import classNames from 'classnames/bind';
import Post from './Post';
import { useEffect, useState } from 'react';
import { searchUser } from '~/service/searchUser';

const cx = classNames.bind(styles);

function Home() {
    console.log('render home');
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        let hot = 'so';
        const fet = async () => {
            let data = await searchUser(hot, 'more');
            if (data.data.length) {
                setPosts(data.data);
            } else {
                setPosts([]);
            }
        };
        fet();
    }, []);

    return (
        <div className={cx('wrapper')}>
            {posts.map((post) => (
                <Post key={post.id} data={post} />
            ))}
        </div>
    );
}

export default Home;
