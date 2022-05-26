import React from 'react';
import { callApi } from '../util';
import PostSingle from './PostSingle';
import { Link } from 'react-router-dom';

const DeletePost = (props) => {
    const { posts, setPostId, token, fetchPosts } = props;

    const handleDelete = async (postId) => {
        const deleteResp = await callApi({
            method: 'DELETE',
            url: `/posts/${postId}`,
            token
        });
        await fetchPosts();
    }
        
    return <>
        {
            token ? <Link className="add-post-link" to='/addpost'>Add Post</Link> : ''
        }
        <div className='posts'>
            {
                posts.map(post => <PostSingle id="all-posts" key={post._id} post={post} token={token}>
                    <Link className='details-link' to={`/posts/${post._id}`}>Details</Link>
                    {
                        post.isAuthor && <button onClick={() => handleDelete(post._id)}>Delete Post</button>
                    }
                </PostSingle>
                )
            }
        </div>
    </>
}

export default DeletePost;