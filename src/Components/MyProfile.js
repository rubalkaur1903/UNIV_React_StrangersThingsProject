import React from 'react';
import { callApi } from '../util';

// const MyProfile = ({posts, token, setPosts}) => {
//     console.log('posts', posts)
//     const profile = async () => {
//         const myMessages = await callApi({
//             method: 'GET',
//             url: '/users/me',
//             token
//         });
//         console.log('myMessages', myMessages)
// //     }
// // profile();
//     return <>
//         <h1>My Profile</h1>
//         {
//             token && posts.isAuthor ? posts.map(post => <div>MyPosts: {post}</div>) : 'No Posts'
//         }
//     </>
// }

// export default MyProfile;