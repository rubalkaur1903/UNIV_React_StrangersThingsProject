import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { callApi } from '../util';


const MessageForm = ({post, token, fetchPosts}) => {
    // console.log('post', post)
    const { postId } = useParams();
    const [content, setContent] = useState('');
    const handleSubmit = async (ev) => {
        ev.preventDefault();
        console.log('content', content)
        const messageResp = await callApi({
            method: 'POST',
            url: `/posts/${postId}/messages`,
            token,
            body: {
                message: {
                    content
                }
            }
        });
        console.log('messageResp', messageResp)
        setContent(messageResp.data.message.content);
        await fetchPosts()
        setContent('');
    }
    return <>
        { 
        token && !post.isAuthor ?
            <form onSubmit={handleSubmit}>
            <input value={content} placeholder="content" onChange={(ev) => setContent(ev.target.value)}></input>
            <button type="submit">Send Message</button>
            </form>
            : ''
        }
        <div>
            <button type="submit" onClick={() => fetchPosts()}>Back to All Posts</button>
        </div>
    </>
}

export default MessageForm;