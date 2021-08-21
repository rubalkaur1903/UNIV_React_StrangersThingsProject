import React, { useState } from 'react';
import { useParams, useHistory } from 'react-router';

const { REACT_APP_BASE_URL } = process.env;

const AccountForm = ({setToken, setMessage}) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const params = useParams();
    const history = useHistory();
    // const [secondPassword, setSecondPassword] = useState('');

    return <>
        <form onSubmit={ async (event) => {
            event.preventDefault();
            const resp = await fetch(`${REACT_APP_BASE_URL}/users/${params.method}`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    user: {
                    username,
                    password
                    }
                })
            });
            const respObj = await resp.json();
            console.log(respObj)
            // setToken(respObj.data.token);
            if (respObj.data) {
                setToken(respObj.data.token);
                setMessage(respObj.data.message)
                if (respObj.data.token) {
                    history.push('/'); 
                }
            }
        }}>
            <input type="text" placeholder="Enter Username" minLength={8} value={username} onChange={(event) => setUsername(event.target.value)}></input>
            <hr></hr>
            <input type="password" placeholder="Enter Password" minLength={8} value={password} onChange={(event) => setPassword(event.target.value)}></input>
            <hr></hr>
            {/* {
                params.method === 'signup' ? <input type="password" placeholder="Enter Password Again" value={secondPassword} onChange={(event) => setSecondPassword(event.target.value)}></input> : password.value === secondPassword.value ? 
            } */}
            <button type="submit">Submit</button>
        </form>
    </>
}

export default AccountForm;