import React from 'react';
import { callApi } from '../util';
import PostSingle from './PostSingle';

const Posts = (props) => {
    const { posts, token } = props;
    console.log(posts)

    const handleDelete = async (postId) => {
        const deleteResp = await callApi({
            method: 'DELETE',
            url: `/posts/${postId}`,
            token
        });
        console.log('deleteResp', deleteResp)
    }

    return <div>
        <h1>Posts</h1>
        {
            posts.map(post => <PostSingle id="posts" key={post._id} post={post}>
                {
                    token && <button onClick={() => handleDelete(post._id)}>Delete Post</button>
                }
            </PostSingle>
            )
        }
    </div>
}

export default Posts;