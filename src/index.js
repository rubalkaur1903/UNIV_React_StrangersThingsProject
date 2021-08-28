import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import Posts from './Components/Posts';
import AccountForm from './Components/AccountForm';
import Home from './Components/Home';
import Logout from './Components/Logout';
import AddPost from './Components/AddPosts';
import PostView from './Components/PostView';
import MyProfile from './Components/MyProfile';
import Search from './Components/Search';


import '../src/style.css'
import { callApi } from './util';

const { REACT_APP_BASE_URL } = process.env;

const App = () => {
    const [posts, setPosts] = useState([]);
    const [token, setToken] = useState('');
    const [user, setUser] = useState('');
    
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
                <Search posts={posts} token={token} setPosts={setPosts} fetchPosts={fetchPosts}/>
                <Posts posts={posts} token={token} fetchPosts={fetchPosts}/>
            </Route>
            <Route exact path="/addpost">
                <AddPost token={token} setPosts={setPosts}/>
            </Route>
            <Route exact path="/posts/:postId">
                <PostView posts={posts} token={token} fetchPosts={fetchPosts}/>
            </Route>
            {/* <Route exact path="/profile">
                <MyProfile posts={posts} setPosts={setPosts} token={token}/>
            </Route> */}
            <Route exact path="/account/:method">
                <Link className="links" to="/account/login">Login</Link> 
                <Link className="links" to="/account/register">Register</Link>
                <AccountForm setToken={setToken} setUser={setUser}/>   
            </Route>
        </div>
    </BrowserRouter>
  )
}
ReactDOM.render(
  <App />,
  document.getElementById('app'),
);