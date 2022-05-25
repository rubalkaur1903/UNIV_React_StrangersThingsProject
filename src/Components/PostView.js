import React from 'react';
import { useParams } from 'react-router-dom';

import PostSingle from './PostSingle';
import MessageForm from './MessageForm';

const PostView = ({posts, token, fetchPosts}) => {
    const { postId } = useParams();
    const postResp = posts.find(post => post._id === postId);
    console.log('post: ', postResp)
    return <>
        <PostSingle post={postResp} >
            {
                postResp && postResp.messages && postResp.messages.map(message => <div key={message._id}>{message.fromUser.username}: {message.content}</div>)
            }
            <MessageForm post={postResp} token={token} fetchPosts={fetchPosts} />
        </PostSingle>
    </>
}

export default PostView;