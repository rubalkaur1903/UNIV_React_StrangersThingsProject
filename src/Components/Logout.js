import React from 'react';
import { Link } from 'react-router-dom';


const Logout = ({setToken}) => {
    return <Link className="main-link" to="/" onClick={() => setToken('')}>Logout</Link>
}

export default Logout;