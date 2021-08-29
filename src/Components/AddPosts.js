import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { callApi } from '../util';
import PostSingle from './PostSingle';


const AddPost = ({posts, token, setPosts, postId, setPostId}) => {
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [location, setLocation] = useState('')
    const [willDeliver, setWillDeliver] = useState('')

    const history = useHistory();

    const handleAdd = async (ev) => {
        ev.preventDefault();
        const addPostResp = await callApi({
            url: '/posts', 
            method: 'POST', 
            body: {
                post: {
                    title,
                    price, 
                    description,
                    location,
                    willDeliver
                }}, 
            token});
            const newPostResp = await callApi({url: '/posts', token});
            setPosts(newPostResp.data.posts);
            setTitle('');
            setPrice('');
            setDescription('');
            if(newPostResp.data.posts) {
                history.push('/posts');
            }
    }
    // const handleUpdate = async (ev) => {
    //     ev.preventDefault();
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
    //     console.log('editPost', editPost)
    //     await fetchPosts();
    // }
    // handleUpdate();


    return <>
    {
        token &&
        <div>
            <h1>Add New Post</h1>
            <form onSubmit={handleAdd}>
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
                    <button className="newpost-submit" type="submit">Submit</button>
                </fieldset>
            </form>
        </div>    
    }
    {/* {
        posts.map(post => <PostSingle key={post._id} token={token} post={post}>
            {
                post.isAuthor && <button onClick={() => handleUpdate(post._id)}>Update Post</button>
            }
        </PostSingle>)
    } */}
    </>
}

export default AddPost;
