import React, { useState } from 'react';
import { useParams, useHistory } from 'react-router';
import { Link } from 'react-router-dom';

import { callApi } from '../util';

const { REACT_APP_BASE_URL } = process.env;

const AccountForm = ({setToken, setUser}) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const params = useParams();
    const history = useHistory();

    return <>
        <form 
        method='post'
        className="form-container" 
        onSubmit={ async (event) => {
            event.preventDefault();

            const loginResp = await callApi({
                url: `/users/${params.method}`,
                method: "POST",
                body: {
                    user: {
                        username,
                        password
                    }
                }
            });
            if (loginResp.data) {
                const userResp = await callApi({url: '/users/me', token: loginResp.data.token});
                setToken(loginResp.data.token);
                setUser(userResp.data.username)
                if (loginResp.data.token) {
                    history.push('/'); 
                }
                if (!password) {
                    throw ('wrong username or password');
                }
            }
        }}>
            <div className='account-form'>
                <div className="login-register-link" >
                    <Link className="links" to="/account/login">Login</Link> 
                    <Link className="links" to="/account/register">Register</Link>
                </div>
                <div className='input-form'>
                    <input className="inputs" type="text" placeholder="Enter Username" minLength={8} value={username} onChange={(event) => setUsername(event.target.value)}></input>
                    <input className="inputs" type="password" placeholder="Enter Password" minLength={8} value={password} onChange={(event) => setPassword(event.target.value)}></input>
                </div>
                <div className='submit-button'>
                    <button className="accountform-submit-button" type="submit">Submit</button>
                </div>
            </div>
        </form>
    </>
}

export default AccountForm;