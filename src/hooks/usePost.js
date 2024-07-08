import {useState, useEffect} from 'react';

export function usePosts(url) {
    const [posts, setPosts] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetchData();

        async function fetchData() {
            setLoading(true);
            try {
                const res = await fetch(
                    `https://jsonplaceholder.typicode.com/${url}`
                );
                if (!res.ok) throw new Error('Request failed');
                const data = await res.json();
                setPosts(data);
                setLoading(false);
            } catch (error) {
                console.log(error);
                setLoading(false);
                setError(error);
            }
        }
    }, [url]);

    return {error, loading, posts};
}
