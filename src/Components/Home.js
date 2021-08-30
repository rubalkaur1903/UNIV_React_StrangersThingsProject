import React from 'react';
import { Link } from 'react-router-dom';

const Home = ({username, token}) => {
    return (<div id="welcome">
        {
            token ? <h1 className="title">Strager's Things</h1> : <h1 className="title"> Welcome to Strager's Things</h1>
        }
        <img className="the-image" src="https://images-na.ssl-images-amazon.com/images/I/610wb0SooJL.png" alt="image of shopping online"></img>
        {
            token ? <div className="welcome-message">Welcome! You are logged in as {username}!</div> : ''
        }
        {
            token ? <Link className="profile-link" to="/profile">View Profile</Link> : ''
        }
    </div>
    )
}

export default Home;