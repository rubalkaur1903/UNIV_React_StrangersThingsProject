import React from 'react';
import { callApi } from '../util';
import PostSingle from './PostSingle';
import { Link } from 'react-router-dom';

const DeletePosts = (props) => {
    const { posts, postId, setPostId, token, fetchPosts, title, setTitle, price, setPrice, description, setDescription, location, setLocation, willDeliver, setWillDeliver  } = props;

    const handleDelete = async (postId) => {
        const deleteResp = await callApi({
            method: 'DELETE',
            url: `/posts/${postId}`,
            token
        });
        await fetchPosts();
    }
    const handleUpdate = async (ev) => {
        const addPostResp = await callApi({
            url: `/posts/${postId}`, 
            method: 'PATCH', 
            body: {
                post: {
                    title,
                    price, 
                    description,
                    location,
                    willDeliver
                }}, 
            token});
            await fetchPosts();
    }
        
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
                {
                    post.isAuthor && <button onClick={() => {setPostId(post._id)}}>Edit</button>
                }
                {/* <form onSubmit={handleUpdate}>
                    <fieldset>
                        <label>Title: </label>
                        <input type="text" placeholder="*title*" value={title} onChange={(event) => {setTitle(event.target.value)}}></input>
                    </fieldset>
                    <fieldset>
                        <label>Price: </label>
                        <input type="text" placeholder="price" value={price} onChange={(event) => {setPrice(event.target.value)}}></input>
                    </fieldset>
                    <fieldset>
                        <label>Description: </label>
                        <input type="text" placeholder="description" value={description} onChange={(event) => {setDescription(event.target.value)}}></input>
                    </fieldset>
                    <fieldset>
                        <label>Location: </label>
                        <input type="text" placeholder="location" value={location} onChange={(event) => {setLocation(event.target.value)}}></input>
                    </fieldset>
                    <fieldset>
                        <label>Will Deliver? </label>
                        <select type="text" value={willDeliver} onChange={(ev) => setWillDeliver(ev.target.value)}>
                            <option value="">Select</option>
                            <option value="true">Yes</option>
                            <option value="false">No</option>
                        </select>
                    </fieldset>
                    <fieldset>
                        <button className="newpost-submit" type="submit">Update</button>
                    </fieldset>
                </form> */}
            </PostSingle>
            )
        }
    </>
}

export default DeletePosts;