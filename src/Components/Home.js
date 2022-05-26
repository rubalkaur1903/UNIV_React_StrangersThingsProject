import React from 'react';
import { Link } from 'react-router-dom';

const Home = ({username, token}) => {
    return (<div id="welcome">
        {
            token ? <p className="title">Stranger's Things</p> : <p className="title"> Welcome to Stranger's Things</p>
        }
        {
            token ? <div className="welcome-message">Welcome! You are logged in as {username}!</div> : ''
        }
        {
            token ? <Link className="profile-link" to="/profile">View Profile</Link> : ''
        }
        <div className='image'>
            <img className="home-image" src="https://i0.wp.com/startupbiz.co.zw/wp-content/uploads/2020/07/Creating-a-platform-for-Buying-Selling-Businesses-in-Zimbabwe-scaled.jpg?resize=1280%2C640&ssl=1" alt="image of shopping online"></img>
        </div>
    </div>
    )
}

export default Home;