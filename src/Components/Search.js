import React, { useEffect, useState } from 'react';
import { callApi } from '../util';
import PostSingle from './PostSingle';

const Search =  ({posts, setPosts}) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [originalPost, setOriginalPost] = useState(posts);

    const postMatches = (post, text) => {
        let check = post.includes(text);
        // console.log('check', check)
        return check;
    }    
    // useEffect(() => {
    //     try {
    //     } catch (error) {
    //         console.error(error)
    //     }
    // }, [])
    const handleSubmit = () => {
        const filteredPosts = posts.filter(post => postMatches(post.title.toLowerCase(), searchTerm));
        console.log('filteredPosts', filteredPosts)
    
        const postsToDisplay = searchTerm.length ? filteredPosts : posts;
        console.log('postsToDisplay', postsToDisplay)
        setPosts(filteredPosts);
    }

    return <>
        <form className="search-form" onSubmit={ (event) => {
            event.preventDefault();
            handleSubmit();
            // postsToDisplay.map(postToDisplay => <PostSingle key={postToDisplay._id} post={postToDisplay} />)
            // postsToDisplay.map(postToDisplay => {
            //     <div key={ postToDisplay._id }>
            //         <div>{postToDisplay.author.username}</div>
            //         <div>{postToDisplay.title}</div>
            //     </div>
            // })
        }}>
            <input type="text" placeholder="search" className="search-input" value={searchTerm} onChange={(event) => setSearchTerm(event.target.value)}></input>
            <button type="submit" className="search-btn">Search</button>
        </form>
    </>
}

export default Search;