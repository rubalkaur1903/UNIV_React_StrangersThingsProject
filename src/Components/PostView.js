import React from 'react';
import { useParams, Link } from 'react-router-dom';

import PostSingle from './PostSingle';
import MessageForm from './MessageForm';

const PostView = ({posts, token, fetchPosts}) => {
    const { postId } = useParams();
    const postResp = posts.find(post => post._id === postId);
    return <>
        <PostSingle post={postResp} >
            {
                postResp && postResp.messages && postResp.messages.map(message => <div key={message._id}>{message.fromUser.username}: {message.content}</div>)
            }
            <Link className='back-to-posts-link' to="/posts">Back</Link>
            <MessageForm post={postResp} token={token} fetchPosts={fetchPosts} />
        </PostSingle>
    </>
}

export default PostView;