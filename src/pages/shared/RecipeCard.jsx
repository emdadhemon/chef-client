import React, { useState } from 'react';
import { FaRegHeart, FaRegStar, FaStar, FaThumbsUp } from 'react-icons/fa';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const RecipeCard = ({ recipe }) => {
    const { _id, title, banner_url, description, likes, rating, ingredients } = recipe;

    const [accepted, setAccepted] = useState(false);

    const handleAccepted = event => {
        setAccepted(true);
        toast('Added to Favourite')
    }


    return (
        <div>
            <div className="card h-[100%]   shadow-xl image-full ">

                <figure><img src={banner_url} alt="Shoes" /></figure>
                <div className="card-body">
                    <div className='flex items-center gap-3 justify-between '>
                        <h2 className="card-title text-white text-2xl font-bold">{title}</h2>
                        <button onClick={handleAccepted} className='btn btn-square btn-success pb-0 flex items-center' disabled={accepted} > <FaRegHeart style={{ color: 'white' }}></FaRegHeart></button>
                    </div>
                    <p className='text-white mt-4 text-sm'>{description}</p>
                    <div className='text-sm mt-2'>
                        <h1 className='text-white'><strong>Ingredients :</strong></h1>
                        {
                            ingredients.map((ingredient, index) => <ul key={index} className='list-disc ps-4 ' >
                                <li className='text-white'>{ingredient}</li>
                            </ul>)
                        }
                    </div>
                    <div className="card-actions items-end mt-auto">
                        <Link to={`/recipe/${_id}`}><button className=" btn text-white w-[100%] btn-success mt-3">View Recipe Details</button></Link>
                    </div>
                    <div className='flex justify-between items-center gap-4 text-sm' >
                        <div className='flex items-center gap-2 mt-5 text-white'>
                            <FaThumbsUp></FaThumbsUp><span>{likes}</span>
                        </div>
                        <div className='text-white mt-5'>
                            <div className='flex gap-2 items-center'>
                                <Rating
                                    placeholderRating={rating}
                                    emptySymbol={<FaRegStar style={{ color: "#f2a006", fontSize: "10px" }}></FaRegStar>}
                                    placeholderSymbol={<FaStar style={{ color: "#f2a006", fontSize: "10px" }}></FaStar>}
                                    fullSymbol={<FaStar style={{ color: "#f2a006", fontSize: "10px" }}></FaStar>}
                                    readonly
                                />
                                <span>{rating}</span>
                            </div>
                        </div>
                    </div>

                </div>


            </div>
        </div>
    );
};

export default RecipeCard;