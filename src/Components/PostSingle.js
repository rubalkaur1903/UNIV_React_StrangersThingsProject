import React from 'react';

const PostSingle = ({post, children}) => {
    return (post
        ? <div className="single-post">
            <h3><b>Seller's Username: {post.author.username}</b></h3>
            <div><b><i>{post.title}</i></b></div>
            <div>Price: {post.price ? post.price : '[On Request]'}</div>
            <div>Description: {post.description}</div>
            <div>Location: {post.location ? post.location : '[On Request]'}</div>
            <div>Will Deliver? -- {post.willDeliver ? 'yes' : 'no'}</div>
            {
                children
            }
        </div>
        : 'Loading....'
    )
}

export default PostSingle;