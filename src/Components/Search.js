import React, { useEffect, useState } from 'react';
import { callApi } from '../util';

const Search =  ({posts}) => {
    // console.log('posts: ', posts)
    const [searchTerm, setSearchTerm] = useState('');
    // console.log('searchTerm ', searchTerm);

    const postMatches = (post, text) => {
        console.log(post)
        console.log(text)
        let check = post.includes(text);
        console.log('check', check)
    }
    const filteredPosts = posts.filter(post => postMatches(post.title, searchTerm));
    console.log('filteredPosts', filteredPosts)
    const postsToDisplay = searchTerm.length ? filteredPosts : posts;

    return <>
        <form className="search-form" onSubmit={ (event) => {
            event.preventDefault();
            postsToDisplay.map(postToDisplay => <div key={ postToDisplay._id }>{postToDisplay}</div>)
        }}>
            <input type="text" placeholder="search" className="search-input" value={searchTerm} onChange={(event) => setSearchTerm(event.target.value)}></input>
            <button type="submit" className="search-btn">Search</button>
        </form>
    </>
}

export default Search;