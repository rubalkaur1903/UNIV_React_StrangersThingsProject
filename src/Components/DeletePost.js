import React from 'react';
import { callApi } from '../util';
import PostSingle from './PostSingle';
import { Link } from 'react-router-dom';

const DeletePosts = (props) => {
    const { posts, token, fetchPosts } = props;

    const handleDelete = async (postId) => {
        const deleteResp = await callApi({
            method: 'DELETE',
            url: `/posts/${postId}`,
            token
        });
        await fetchPosts();
    }
    // const handleUpdate = async (postId) => {
    //     const editPost = callApi({
    //         method: 'PATCH',
    //         url: `/posts/${postId}`,
    //         body: {
    //             post: {
    //                 title,
    //                 price, 
    //                 description,
    //                 location,
    //                 willDeliver
    //             }},
    //         token
    //     });
    //     await fetchPosts();
    // }
        
    return <>
        {
            token ? <Link to='/addpost'>Add Post</Link> : ''
        }
        <h1>Posts</h1>
        {
            posts.map(post => <PostSingle id="posts" key={post._id} post={post} token={token}>
                <Link to={`/posts/${post._id}`}>Details</Link>
                {
                    post.isAuthor && <button onClick={() => handleDelete(post._id)}>Delete Post</button>
                }
                {/* {
                    post.isAuthor && <button onClick={() => handleUpdate(post._id)}>Update Post</button>
                } */}
            </PostSingle>
            )
        }
    </>
}

export default DeletePosts;