import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import Posts from './Components/Posts';
import AccountForm from './Components/AccountForm';
import Home from './Components/Home';
import Logout from './Components/Logout';
import AddPost from './Components/AddPosts';

import '../src/style.css'

const { REACT_APP_BASE_URL } = process.env;

const App = () => {
    const [posts, setPosts] = useState([]);
    const [token, setToken] = useState('');
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
                <Link className="main-link" to="/">Home</Link>
                <Link className="main-link" to="/posts">Posts</Link>
                {
                    token ? <Logout /> : <Link className="main-link" to="/account/:method">Login/Register</Link>
                }
            </div>
            <Route exact path="/">
                <Home />
            </Route>
            <Route exact path="/posts">
                <AddPost token={token} setPosts={setPosts}/>
                <Posts posts={posts} token={token}/>
            </Route>
            <Route exact path="/account/:method">
                <Link className="links" to="/account/login">Login</Link> 
                <Link className="links" to="/account/register">Register</Link>
                <AccountForm setToken={setToken} />   
            </Route>
        </div>
    </BrowserRouter>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('app'),
);