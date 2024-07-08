import {useState, useEffect} from 'react';
import {Link, useLoaderData} from 'react-router-dom';
// import {usePosts} from './hooks/usePost.js';

export async function loader() {
    return fetch('https://jsonplaceholder.typicode.com/posts/');
}

export default function Home() {
    const posts = useLoaderData();

    console.log(import.meta.env.VITE_URL);
    // const {error, loading, posts} = usePosts('posts');
    // const [posts, setPosts] = useState([]);

    // useEffect(() => {
    //     fetchData();

    //     async function fetchData() {
    //         try {
    //             const res = await fetch(
    //                 'https://jsonplaceholder.typicode.com/posts'
    //             );
    //             if (!res.ok) throw new Error('Request failed');
    //             const data = await res.json();
    //             setPosts(data);
    //         } catch (error) {
    //             console.log(error);
    //         }
    //     }
    // }, []);
    return (
        <div>
            {posts.map((post) => (
                <Link key={post.id} to={`/posts/${post.id}`}>
                    <p>{post.title}</p>
                </Link>
            ))}
        </div>
    );
}
