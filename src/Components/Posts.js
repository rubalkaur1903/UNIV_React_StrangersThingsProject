import React from 'react';
import { callApi } from '../util';
import PostSingle from './PostSingle';

const Posts = (props) => {
    const { posts, token, fetchPosts } = props;
    console.log('posts', posts)

    const handleDelete = async (postId) => {
        const deleteResp = await callApi({
            method: 'DELETE',
            url: `/posts/${postId}`,
            token
        });
        await fetchPosts();
    }

    return <>
        <h1>Posts</h1>
        {
            posts.map(post => <PostSingle id="posts" key={post._id} post={post}>
                {
                    post.isAuthor && <button onClick={() => handleDelete(post._id)}>Delete Post</button>
                }
            </PostSingle>
            )
        }
    </>
}

export default Posts;