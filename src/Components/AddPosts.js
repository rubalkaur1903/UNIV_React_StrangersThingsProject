import React, { useState } from 'react';
import { callApi } from '../util';

const AddPost = ({token, setPosts}) => {
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');

    const handleAdd = async (ev) => {
        ev.preventDefault();
        const addPostResp = await callApi({
            url: '/posts', 
            method: 'POST', 
            body: {
                post: {
                    title,
                    price, 
                    description
                }}, 
            token});
            const newPostResp = await callApi({url: '/posts', token});
            setPosts(newPostResp.data.posts);
            setTitle('');
            setPrice('');
            setDescription('');
    }

    return <>
        <form className="search-form">
            <input type="text" placeholder="search" className="search-input"></input>
            <button type="submit" className="search-btn">Search</button>
        </form>
        {
            token ? 
                <>
                    <h1>Add Post</h1>
                    <form onSubmit={handleAdd}>
                        <input type="text" placeholder="title" value={title} onChange={(event) => {setTitle(event.target.value)}}></input>
                        <input type="text" placeholder="price" value={price} onChange={(event) => {setPrice(event.target.value)}}></input>
                        <input type="text" placeholder="description" value={description} onChange={(event) => {setDescription(event.target.value)}}></input>
                        <button type="submit">Submit</button>
                    </form>
                </>
            : null
        }
    </>
}

export default AddPost;
