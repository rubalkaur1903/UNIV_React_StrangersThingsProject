import React from 'react';

const Posts = (props) => {
    const { posts, setPostId } = props;
    return <div>
        <h1>Posts</h1>
        {
            posts.map(post => <div id="posts" key={post._id}>
                <h3>Username: {post.author.username}</h3>
                <div>Title: {post.title}</div>
                <div>Price: {post.price}</div>
                <div>Description: {post.description}</div>
                <button type="button" className="edit-btn" onClick={() => setPostId(post._id)}>Edit</button>
            </div>
            )
        }
    </div>
}

export default Posts;