import React from 'react';
import { useNavigate } from 'react-router-dom';

const Meal = ({ meal }) => {
    const { idMeal, strMealThumb, strMeal, strInstructions } = meal;

    const navigate = useNavigate()
    const showDetails = () => {
        navigate(`/meal/${idMeal}`)
    }

    return (
        <div className='border border-[salmon] rounded-xl bg-[#aefce2]'>

            <img className='rounded-t-xl md:h-[300px] md:w-[400px]' src={strMealThumb} alt="" />

            <h1 className='text-lg font-bold pt-3'>Title: {strMeal}</h1>

            <p className='px-5 py-3 text-justify'> <span className='font-bold'>Description:</span> {strInstructions.slice(0, 100)}</p>

            <button onClick={showDetails} className='border rounded-3xl text-white bg-purple-500 text-lg font-semibold p-2 px-5 mb-3'>Show Details</button>

        </div>
    );
};

export default Meal;