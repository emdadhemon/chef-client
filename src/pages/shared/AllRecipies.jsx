import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const AllRecipies = () => {
    const recipies = useLoaderData();
    return (
        <div className='w-[80%] mx-auto my-6'>
            <h1 className='text-3xl font-bold text-center my-6'>All Recipies</h1>
            <div className='grid lg:grid-cols-4 sm:grid-cols-2 gap-5'>
                {
                    recipies.map(recipe => <div>
                        <div className="card h-80 bg-white ">
                            <figure>
                                <img src={recipe.banner_url} alt="Shoes" className="rounded-top-xl w-100 h-44 object-cover" />
                            </figure>
                            <div className="items-center text-center my-5 px-4">
                                <h2 className="font-bold text-sm">{recipe.title}</h2>
                                <p className='py-2 text-sm '>{recipe.description}</p>
                            </div>
                            <Link to={`/recipe/${recipe._id}`} className="text-center bg-success font-medium py-2 mt-auto hover:bg-green-700 hover:text-white">View Details</Link>
                        </div>
                    </div>
                    )
                }
            </div>
        </div>
    );
};

export default AllRecipies;