import React from 'react';

const PostSingle = ({post, children}) => {
    return post 
        ? <div>
            <h3>Username: {post.author.username}</h3>
            <div>Title: {post.title}</div>
            <div>Price: {post.price}</div>
            <div>Description: {post.description}</div>
            {
                children
            }
        </div>
        : 'Loading....'
    
}

export default PostSingle;