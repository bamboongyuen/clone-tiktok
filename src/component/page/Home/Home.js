import styles from './Home.module.scss';
import classNames from 'classnames/bind';
import Post from './Post';
import { useEffect, useState } from 'react';

const cx = classNames.bind(styles);

function Home() {
    console.log('render home');
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        let hot = 'so';
        fetch(
            `https://tiktok.fullstack.edu.vn/api/users/search?q=${hot.trim()}&type=more`,
        )
            .then((res) => res.json())
            .then((data) => {
                if (data.data.length) {
                    setPosts(data.data);
                } else {
                    setPosts([]);
                }
            })
            .catch((e) => console.log(e));
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
