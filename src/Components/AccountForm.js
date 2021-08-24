import React, { useState } from 'react';
import { useParams, useHistory } from 'react-router';

import { callApi } from '../util';

const { REACT_APP_BASE_URL } = process.env;

const AccountForm = ({setToken, setMessage}) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const params = useParams();
    const history = useHistory();
    // const [secondPassword, setSecondPassword] = useState('');

    return <>
        <form className="inputs" onSubmit={ async (event) => {
            event.preventDefault();

            const loginResp = await callApi({
                url: `/users/${params.method}`,
                method: 'POST',
                body: {
                    user: {
                    username,
                    password
                    }
                }
            });
            if (loginResp.data) {
                console.log('loginResp', loginResp)
                const userResp = await callApi({url: '/users/me', token: loginResp.data.token});
                setToken(loginResp.data.token);
                setMessage(loginResp.data.message)
                if (loginResp.data.token) {
                    history.push('/'); 
                }
            }
        }}>
            <input className="inputs" type="text" placeholder="Enter Username" minLength={8} value={username} onChange={(event) => setUsername(event.target.value)}></input>
            <input className="inputs" type="password" placeholder="Enter Password" minLength={8} value={password} onChange={(event) => setPassword(event.target.value)}></input>
            {/* {
                params.method === 'register' ? <input type="password" placeholder="Enter Password Again" value={secondPassword} onChange={(event) => setSecondPassword(event.target.value)}></input> : password.value === secondPassword.value ? 
            } */}
            <button className="btn-input" type="submit">Submit</button>
        </form>
    </>
}

export default AccountForm;