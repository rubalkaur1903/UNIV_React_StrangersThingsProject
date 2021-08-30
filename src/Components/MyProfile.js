import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { callApi } from '../util';

const MyProfile = ({ token, messages, user, setMesaages}) => {
    const history = useHistory();

    const handleSubmit = async () => {
            const messageResp = await callApi({
                url: '/users/me',
                token
            });
            console.log('messageResp', messageResp)
            setMesaages(messageResp.data.messages);    
    }
    if(!token) {
        history.push('/')
    }

    return <>
    <h1>My Profile</h1>
    <form onSubmit={(ev) => {
        ev.preventDefault();
        handleSubmit()
    }}>
        <button type="submit">View My Messages</button>
    </form>
    <h2>Sent Messages</h2>
    {
        token ? 
        messages.map((message, idx) => {
            return <div key={idx} >
                {
                    user === message.fromUser.username ?
                    <>
                    <div>
                        <div>For the Product "{message.post.title}" </div>
                        <div>Product ID: {message.post._id}</div>
                        <div>Message: {message.content}</div> 
                        <hr></hr>
                    </div>
                    </>
                    : ''
                }
            </div>
        }) : ''
    }
    <h2>Received Messages</h2>
    {
        token ? 
        messages.map((message, idx) => {
            return <div key={idx} >
                {
                    user !== message.fromUser.username ?
                    <>
                        <div>For the Product "{message.post.title}" </div>
                        <div>Product ID: {message.post._id}</div>
                        <div>Message: {message.content}</div> 
                        <hr></hr>
                    </>
                    : ''
                }
            </div>
        }) : ''
    }
    </>        
}
export default MyProfile;