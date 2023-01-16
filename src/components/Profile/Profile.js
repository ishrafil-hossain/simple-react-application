import React from 'react';
import { Link } from 'react-router-dom';

const Profile = () => {
    return (
        <div className='grid content-center'>
            <div>
                <h1>Contact Information</h1>
                <h1>Name: Md Ishrafil Hossain</h1>
                <h3>Email: ishrafil.webdev@gmail.com</h3>
                <h3>Contact number: +880 1828632233</h3>
                <Link to="https://github.com/ishrafil-hossain">GitHub</Link>
                <Link to="">LinkedIn</Link>
            </div>
        </div>
    );
};

export default Profile;