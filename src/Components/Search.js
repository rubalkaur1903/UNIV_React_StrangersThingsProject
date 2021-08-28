import React, { useEffect, useState } from 'react';
import { callApi } from '../util';

const Search =  ({posts}) => {
    console.log('posts: ', posts)
    const [searchTerm, setSearchTerm] = useState('');
    console.log('searchTerm ', searchTerm);

    // const handleSearch = async (ev) => {
    //     ev.preventDefault();
    //     const searchResp = await callApi({
    //         method: 'GET',
    //         url: `/posts?title=${searchTerm}`
    //     })
    //     console.log('searchResp ', searchResp)
    // }

    const postMatches = (post, text) => {
        // const searchResp = await callApi({
        //             method: 'GET',
        //             url: `/posts?title=${searchTerm}`
        //         })
        const check = posts.includes(searchTerm);
        console.log('check', check)
    }
    const filteredPosts = posts.filter(post => postMatches(post, searchTerm));
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