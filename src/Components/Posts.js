import React from 'react';
import PostSingle from './PostSingle';

const Posts = (props) => {
    const { posts, token } = props;
    console.log(posts)
    return <div>
        <h1>Posts</h1>
        {
            posts.map(post => <PostSingle id="posts" key={post._id} post={post}>
                
            </PostSingle>
            )
        }
    </div>
}

export default Posts;