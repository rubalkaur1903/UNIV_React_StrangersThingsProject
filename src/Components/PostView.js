import React from 'react';
import { useParams } from 'react-router-dom';

import PostSingle from './PostSingle';
import MessageForm from './MessageForm';

const PostView = ({posts, token, fetchPosts}) => {
    // console.log('posts', posts)
    const { postId } = useParams();
    console.log('postId', postId);
    const post = posts.find(post => post._id === postId);
    console.log('post: ', post)
    return <>
        {/* <h1>Post id for post {postId}</h1> */}
        <PostSingle post={post} >
            {
                post && post.messages && post.messages.map(message => <div key={message._id}>Message: {message.content}</div>)
            }
            <MessageForm post={post} token={token} fetchPosts={fetchPosts} />
        </PostSingle>
    </>
}

export default PostView;