import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import Posts from './Components/Posts';
import AccountForm from './Components/AccountForm';
import Home from './Components/Home';
import Logout from './Components/Logout';
import AddPost from './Components/AddPosts';

import '../src/style.css'
import { callApi } from './util';

const { REACT_APP_BASE_URL } = process.env;

const App = () => {
    const [posts, setPosts] = useState([]);
    const [token, setToken] = useState('');
    const [user, setUser] =useState('');
    
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
            <div id="navbar">
                <Link className="main-link" to="/">Home</Link>
                <Link className="main-link" to="/posts">Posts</Link>
                {
                    token ? <Logout setToken={setToken}/> : <Link className="main-link" to="/account/:method">Login/Register</Link>
                }
            </div>

            <Route exact path="/">
                <Home username={user} token={token}/>
            </Route>

            <Route exact path="/posts">
                <AddPost token={token} setPosts={setPosts}/>
                <Posts posts={posts} token={token} fetchPosts={fetchPosts}/>  
            </Route>

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