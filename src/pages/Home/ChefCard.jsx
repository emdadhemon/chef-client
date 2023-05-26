import React from 'react';
import { FaThumbsUp } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ChefCard = ({ chefDetail }) => {
    const {id, name, experience, img, recipies,likes } = chefDetail;
    return (
        <div className="card bg-zinc-200 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl w-64 h-64 object-cover shadow-xl " />
            </figure>
            <div className="card-body items-start text-center">
                <h2 className="card-title font-bold">{name}</h2>
                <p className='text-sm'><strong>Experience :</strong> {experience}</p>
                <p className='text-sm'><strong>Total recipies :</strong> {recipies}</p>
            </div>
            <div className='w-[80%] mb-4 mx-auto'>
                <Link to={`/recipies/${id}`}><button className="w-[100%] rounded-xl  py-2 btn-success text-white hover:bg-green-700">View Recipies</button></Link>
            </div>
            <div className='card-footer ps-8 mb-4'>
                <p className='flex items-center'><FaThumbsUp></FaThumbsUp><span className='ms-2'>{likes}</span></p>
            </div>
            
        </div>
    );
};

export default ChefCard;