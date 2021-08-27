import React from 'react';
import { useParams } from 'react-router-dom';

import PostSingle from './PostSingle';
import MessageForm from './MessageForm';

const PostView = ({posts, token, fetchPosts}) => {
    // console.log('posts', posts)
    const { postId } = useParams();
    console.log('postId', postId);
    const postResp = posts.find(post => post._id === postId);
    console.log('post: ', postResp)
    return <>
        {/* <h1>Post id for post {postId}</h1> */}
        <PostSingle post={postResp} >
            {
                postResp && postResp.messages && postResp.messages.map(message => <div key={message._id}>{message.fromUser.username}: {message.content}</div>)
            }
            <MessageForm post={postResp} token={token} fetchPosts={fetchPosts} />
        </PostSingle>
    </>
}

export default PostView;