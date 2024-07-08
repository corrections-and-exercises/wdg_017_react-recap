import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import {
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider,
    Route,
} from 'react-router-dom';

import MainLayout from './MainLayout.jsx';
import Home from './Home.jsx';
import Post from './Post.jsx';

import {loader as homeLoader} from './Home.jsx';
import {loader as postLoader} from './Post.jsx';

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<MainLayout />}>
            <Route index element={<Home />} loader={homeLoader} />
            <Route
                path='posts/:postId'
                element={<Post />}
                loader={({params}) => postLoader(params.postId)}
            />
        </Route>
    )
);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
