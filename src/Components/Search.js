import React, { useState } from 'react';
import { callApi } from '../util';

const Search = ({posts, setPosts}) => {
    const [searchTerm, setSearchTerm] = useState('');
    console
    return <>
        <form className="search-form" onSubmit={ async (ev) => {
            ev.preventDefault();
            console.log('searchTerm', searchTerm)
            try {
                const searchResp = await callApi({
                    method: 'GET',
                    url: `/posts`,
                });
                console.log('searchResp', searchResp);

                if(!searchTerm) {
                    return posts;
                } else{
                    return posts.filter(post => {
                        const searchResults = post.title.toLowerCase() === searchTerm;
                        console.log(searchResults)
                    })
                }
                setPosts(searchResults);
            } catch (error) {
                console.error(error)
            }
        }}>
            <input type="text" placeholder="search" className="search-input" value={searchTerm} onChange={(event) => setSearchTerm(event.target.value)}></input>
            <button type="submit" className="search-btn">Search</button>
        </form>
    </>
}

export default Search;