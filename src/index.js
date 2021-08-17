import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

const App = () => {
    const [posts, setPosts] = useState([]);
    console.log(posts)

    useEffect(() => {
        const fetchPosts = async () => {
            const response = await fetch('https://strangers-things.herokuapp.com/api/2105-SJS-RM-WEB-PT/posts');
            const data = await response.json();
            setPosts([data]);
        }
        fetchPosts();
    }, [])

  return <div>
      <h1>Posts</h1>
    {
        posts.map((post, index) => <div key={index}>
            <h3>{post.title}</h3>
            <p>{post.description}</p>
        </div>)
    }
  </div>
}
ReactDOM.render(
  <App />,
  document.getElementById('app'),
);