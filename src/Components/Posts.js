import React from 'react';

const Posts = (props) => {
    const { posts, token } = props;
    console.log(posts)
    return <div>
        <h1>Posts</h1>
        {
            posts.map(post => <div id="posts" key={post._id}>
                <h3>Username: {post.author.username}</h3>
                <div>Title: {post.title}</div>
                <div>Price: {post.price}</div>
                <div>Description: {post.description}</div>
            </div>
            )
        }
        {/* {
            token. ? <button type="button" className="edit-btn">Edit</button> : ''
        } */}
    </div>
}

export default Posts;