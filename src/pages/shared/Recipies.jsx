import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import RecipeCard from './RecipeCard';
import LazyLoad from 'react-lazy-load';
import { FaThumbsUp } from 'react-icons/fa';

const Recipies = () => {

    const { id } = useParams();
    const [chefDetail, setChefDetail] = useState({});
    const { name, bio, experience, banner, likes } = chefDetail;
    useEffect(() => {
        fetch("https://chef-assignment-10-server-emdadhemon.vercel.app/chef")
            .then(res => res.json())
            .then(data => {
                const chefData = data.find(singledata => singledata.id === id)
                setChefDetail(chefData);
            })
    }, [])
    const recipies = useLoaderData()
    return (
        <div className='mt-11 w-[80%] mx-auto'>

            <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-6">
                <div className="text-left">
                    <LazyLoad>
                        <figure><img src={banner} alt="Album" className='w-100 h-96 rounded object-cover ' /></figure>
                    </LazyLoad>
                </div>
                <div className="h-96">
                    <div className="rounded">
                        <div className='flex items-center justify-between'>
                            <h2 className="text-2xl font-semibold mb-4">Name : {name} </h2>
                            <div className='flex items-center justify-between'>
                                <FaThumbsUp></FaThumbsUp> : {likes}
                            </div>
                        </div>
                        <p className='my-4'><strong>Bio :</strong> {bio}</p>
                        <p className='my-4'><strong>Experiences: </strong> {experience} </p>
                        <p><strong>Total Recipies :</strong><span className='ms-2'>{recipies.length}</span></p>
                    </div>

                </div>
            </div>

            <div className='grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 gap-6 lg:mt-10 sm:mt-20 mb-10'>
                {
                    recipies.map((recipe, index) => <RecipeCard
                        key={index}
                        recipe={recipe}
                    >
                    </RecipeCard>)
                }
            </div>

        </div>
    );
};

export default Recipies;