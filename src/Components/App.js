import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';


import {
    Home,
    MyProfile,
    DeletePost,
    AccountForm,
    Logout,
    AddPosts,
    Search,
    PostView
} from '../Components'
import { callApi } from '../util';

const { REACT_APP_BASE_URL } = process.env;

const App = () => {
    const [posts, setPosts] = useState([]);
    const [token, setToken] = useState('');
    const [user, setUser] = useState('');
    const [postId, setPostId] = useState('');
    const [messages, setMessages] = useState([]);
    
    const fetchPosts = async () => {
        const response = await callApi({
            url: '/posts',
            token
        });
        const allPosts = response.data.posts;
        if(allPosts) setPosts(allPosts);
    }
    
    useEffect(() => {
        try {
            fetchPosts();
            } catch (error) {
                console.log(error);
            }
        }, [token])

  return (
    <BrowserRouter>
        <div id="container">
            <div className="navbar">
                <Link className="main-link" to="/">HOME</Link>
                <Link className="main-link" to="/posts">POSTS</Link>
                {
                    token && <Link className="main-link" to="/profile">PROFILE</Link>
                }
                {
                    token ? <Logout setToken={setToken}/> : <Link className="main-link" to="/account/:method">LOGIN/REGISTER</Link>
                }
            </div>
            <Route exact path="/">
                <Home username={user} token={token} posts={posts}/>
            </Route>
            <Route exact path="/posts">
                <Search posts={posts} setPosts={setPosts} fetchPosts={fetchPosts}/>
                <DeletePost posts={posts} token={token} fetchPosts={fetchPosts} setPostId={setPostId} />
            </Route>
            <Route exact path="/addpost">
                <AddPosts token={token} setPosts={setPosts} />
            </Route>
            <Route exact path="/posts/:postId">
                <PostView posts={posts} token={token} fetchPosts={fetchPosts}/>
            </Route>
            <Route exact path="/profile">
                <MyProfile token={token} messages={messages} setMesaages={setMessages} user={user}/>
            </Route>
            <Route exact path="/account/:method">
                <AccountForm setToken={setToken} setUser={setUser}/>   
            </Route>
        </div>
    </BrowserRouter>
  )
}

export default App;