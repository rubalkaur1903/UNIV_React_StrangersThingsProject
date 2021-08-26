import React from 'react';

const Home = ({username, token}) => {
    return (<div id="welcome">
        <h1 className="title">Strager's Things</h1>
        {/* <img className="the-image" src="https://nmgprod.s3.amazonaws.com/media/files/f2/09/f209dcc76d120a2e4f3388dd462ce0a9/cover_image.jpg.760x400_q85_crop_upscale.jpg" alt="image of shopping online" heigth='100%' width='100%'></img> */}
        {
            token ? <div>Welcome! You are logged in as {username}!</div> : ''
        }
    </div>
    )
}

export default Home;