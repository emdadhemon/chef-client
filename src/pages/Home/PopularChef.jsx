import React, { useEffect, useState } from 'react';
import ChefCard from './ChefCard';

const PopularChef = () => {

    const [chefDetails, setChefDetails] = useState([])
    useEffect(() => {
        fetch('https://chef-assignment-10-server-emdadhemon.vercel.app/chef')
            .then(res => res.json())
            .then(data => setChefDetails(data))
    }, [])

    return (
        <div className='w-3/4 mx-auto mt-14 mb-24'>
            <h2 className='text-3xl font-bold text-center'>Most Popular Chef's</h2>
            <div className='grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 gap-4 mt-10'>
                {
                    chefDetails.map(chefDetail => <ChefCard
                        key={chefDetail.id}
                        chefDetail={chefDetail}
                    ></ChefCard>)
                }
            </div>
        </div>
    );
};

export default PopularChef;