import {useState, useEffect} from 'react';
import {useParams, useNavigate, useLoaderData} from 'react-router-dom';
import {usePosts} from './hooks/usePost.js';

export function loader(id) {
    return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
}

export default function Post() {
    const post = useLoaderData();
    // const [post, setPost] = useState({});

    // const {postId} = useParams();

    // const {error, loading, posts} = usePosts(`posts/${postId}`);

    const navigate = useNavigate();

    // useEffect(() => {
    //     fetchData();

    //     async function fetchData() {
    //         try {
    //             const res = await fetch(
    //                 `https://jsonplaceholder.typicode.com/posts/${postId}`
    //             );
    //             if (!res.ok) throw new Error('Request failed');
    //             const data = await res.json();
    //             setPost(data);
    //         } catch (error) {
    //             console.log(error);
    //         }
    //     }
    // }, [postId]);
    return (
        <div>
            <p>{post.title}</p>
            <p>{post.body}</p>
            <button onClick={() => navigate(-1)}>Back</button>
        </div>
    );
}
