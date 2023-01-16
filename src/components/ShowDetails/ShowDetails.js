import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ShowDetails = () => {
    const sigleMeal = useLoaderData().meals[0]
    const { idMeal, strMealThumb, strMeal, strInstructions } = sigleMeal;
    return (
        <div >
            <div className='grid lg:grid-cols-2 gap-x-12 md:mx-12 md:pt-10 justify-center align-middle border my-5'>
                <div className='grid justify-items-center'>
                    <img className='md:rounded-xl' src={strMealThumb} alt="" />
                </div>
                <div className='mx-3'>
                    <div>
                        <h1>ID: {idMeal}</h1>
                        <h3>Title: {strMeal}</h3>
                        <p className='text-justify'>Description: {strInstructions}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShowDetails;