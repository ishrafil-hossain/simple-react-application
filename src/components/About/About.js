import React from 'react';

const About = () => {
    return (
        <div>
            <h1 className='text-2xl my-8 font-semibold text-red-700'>Welcome to you Easy-Meal application</h1>

            <div className='text-justify mx-12 text-xl'>
                <p>This is the documentation of Easy-Meal application. After reading this documentation, you can know about easy-meal application. Easy Meal is a meal type application, where you will get your favorite food.</p>

                <p className='my-5'><span className='font-semibold text-red-700'>Tools:</span> In Easy-Meal application I have used popular JavaScript Library React JS, for designing I have used popular CSS framework Tailwind CSS and for Routing I have used React Router Dom version-6</p>

                <p><span className='font-semibold text-red-700'>Route:</span> Easy-Meal application has 3 routes, those are Home, About and Profile</p>

                <p className='my-5'><span className='font-semibold text-red-700'> Home:</span> Home page contain two parts Banner and Food item. Banner has three images and each Food item has image, title, description and a details button. After clicking details button the use will see full details of a meal.</p>

                <p className='mb-5'><span className='font-semibold text-red-700'> About:</span> In about page has documentation of this application.</p>

                <p><span className='font-semibold text-red-700'> Profile:</span> Profile page contain the information of the developer </p>
            </div>
        </div>
    );
};

export default About;