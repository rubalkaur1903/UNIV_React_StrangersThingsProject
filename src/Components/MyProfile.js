import React, { useEffect, useState } from 'react';
import { callApi } from '../util';

const MyProfile = ({posts, token, setPosts}) => {
    // const [myMessages, setMyMessages] = useState([]);
    console.log('posts', posts)
    const profile = async () => {
        const messageResp = await callApi({
            method: 'GET',
            url: '/users/me',
            token
        });
        console.log('messageResp', messageResp);
        // setMyMessages(messageResp)
    }
profile();
    return <>
        <h1>My Profile</h1>
        {/* {
             myMessages ? myMessages.map(myMessage => <div>MyPosts: {myMessage.posts}</div>) : 'No Posts'
        } */}
    </>
}

export default MyProfile;