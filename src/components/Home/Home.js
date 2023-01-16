import React, { useEffect, useState } from 'react';
import Meal from '../Meal/Meal';

const Home = () => {
    const [meals, setMeals] = useState([]);

    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=Chicken')
            .then(res => res.json())
            .then(data => setMeals(data.meals))
    }, [])
  
    return (
        <div className='my-8 mx-2'>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-8 md:container mx-auto'>
                {(meals.length === 0) ? <h5 className='text-center text-2xl lg:ml-[580px] text-blue-600'>Loading...</h5> :
                    meals.map((meal, index) => <Meal
                        key={index}
                        meal={meal}
                    ></Meal>)
                }
            </div>
        </div>
    );
};

export default Home;