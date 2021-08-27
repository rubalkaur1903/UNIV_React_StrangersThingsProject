import React from 'react';

const PostSingle = ({post, children}) => {
    // console.log(post)
    return (post
        ? <div className="single-post">
            <h3><b>Username: {post.author.username}</b></h3>
            <div><i>{post.title}</i></div>
            <div>Price: {post.price}</div>
            <div>Description: {post.description}</div>
            {
                children
            }
        </div>
        : 'Loading....'
    )
}

export default PostSingle;