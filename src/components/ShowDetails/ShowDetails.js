import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ShowDetails = () => {
    const sigleMeal = useLoaderData().meals[0]
    const { idMeal, strMealThumb, strMeal, strInstructions } = sigleMeal;
    return (
        <div >
            <div className='grid lg:grid-cols-2 md:mx-12 md:pt-10 justify-center align-middle mb-5'>
                <div>
                    <img className='md:rounded-xl' src={strMealThumb} alt="" />
                </div>
                <div className='md:mx-3 bg-[#86efac] p-5 md:rounded-xl grid content-center text-start'>
                    <div>
                        <h1 className='text-2xl font-semibold'>ID: {idMeal}</h1>
                        <h3 className='text-2xl font-semibold'>Title: {strMeal}</h3>
                        <p className='text-justify'><span className='font-semibold text-lg'>Description:</span> {strInstructions}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShowDetails;