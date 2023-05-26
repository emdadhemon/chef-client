import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { FaBeer, FaRegHeart, FaRegStar, FaStar, FaThumbsUp } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import Rating from 'react-rating';



const RecipeDetails = () => {

    const [accepted, setAccepted] = useState(false);

    const handleAccepted = event => {
        setAccepted(true);
        toast('Added to Favourite')
    }

    const recipe = useLoaderData()

    const { image_url, banner_url, title, ingredients, description, directions, likes, rating } = recipe;

    return (
        <div className='w-[80%] mx-auto my-12'>
            <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-4">
                <div>
                    <figure><img className='rounded-xl' src={banner_url} alt="Album" /></figure>
                    <div className='mt-6'>
                        <h1 className='text-2xl text-green-600 font-bold'>Ingredients : </h1>
                        <div className='mt-4'>
                            {
                                ingredients.map((ingredient, index) => <ul key={index} className='list-disc ps-6 mb-2' >
                                    <li>{ingredient}</li>
                                </ul>)
                            }
                        </div>
                    </div>
                </div>
                <div className="relative p-8 bg-gray-300 rounded pt-16 ">
                    <div className='flex items-center gap-3 justify-between '>
                        <h2 className="card-title  text-green-600 text-4xl font-bold">{title}</h2>
                        <button onClick={handleAccepted} className='btn btn-square btn-success pb-0 flex items-center' disabled={accepted} > <FaRegHeart style={{ color: 'white' }}></FaRegHeart></button>
                    </div>
                    <p className='mb-8 mt-6 text-sm'>{description}</p>
                    <div>
                        <h1 className='text-2xl text-green-600 font-bold mb-4'>Instructions : </h1>
                        {
                            directions.map((direction, index) => <ul key={index} className='list-disc ps-6 mb-2' >
                                <li>{direction}</li>
                            </ul>)
                        }
                    </div>
                    <div className='lg:mt-36 ms-2 flex justify-between'>
                        <div className='flex gap-2 items-center'>
                            <FaThumbsUp className='text-cyan-500'></FaThumbsUp>
                            <h1 ><span>{likes}</span></h1>
                        </div>
                        <div className='flex gap-2 mr-4 items-center'>
                            <Rating
                                placeholderRating={rating}
                                emptySymbol={<FaRegStar style={{ color: "#f2a006", fontSize: "20px" }}></FaRegStar>}
                                placeholderSymbol={<FaStar style={{ color: "#f2a006", fontSize: "20px" }}></FaStar>}
                                fullSymbol={<FaStar style={{ color: "#f2a006", fontSize: "20px" }}></FaStar>}
                                readonly
                            />
                            <span>{rating}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RecipeDetails;