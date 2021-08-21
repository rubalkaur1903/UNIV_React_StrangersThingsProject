import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import Posts from './Components/Posts';
import AccountForm from './Components/AccountForm';
import Home from './Components/Home';

const { REACT_APP_BASE_URL } = process.env;

const App = () => {
    const [posts, setPosts] = useState([]);
    const [token, setToken] = useState('');
    const [message, setMessage] = useState('');
    const [postId, setPostId] = useState(null);
    

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await fetch(`${REACT_APP_BASE_URL}/posts`);
                const results = await response.json();
                setPosts(results.data.posts);               
            } catch (error) {
                console.log(error);
            }
        }
        fetchPosts();
    }, [])

  return (
    <BrowserRouter>
        <div id="container">
            <div id="navbar">
                <Link to="/">Home</Link> |
                <Link to="/posts">Posts</Link> | 
                <Link to="/account/:method">Login/Register!</Link>
            </div>
            <Route exact path="/">
                <Home message={message}/>
                {/* username={guest.username} */}
            </Route>
            <Route exact path="/posts">
                <Posts posts={posts} setPostId={setPostId}/>
            </Route>
            <Route exact path="/account/:method">
                <Link to="/account/login">Login</Link> |
                <Link to="/account/register">Register</Link>
                <AccountForm setToken={setToken} setMessage={setMessage}/>   
            </Route>
        </div>
    </BrowserRouter>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('app'),
);