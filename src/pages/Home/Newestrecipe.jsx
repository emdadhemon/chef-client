import React from 'react';

const Newestrecipe = () => {
    return (
        <div className='w-[80%] mx-auto mb-10'>
            <h1 className='text-3xl font-bold text-center my-16'>Our Newest Recipes</h1>
            <div className='grid lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-2 gap-12'>
                <div className=' mx-auto'>
                    <img className='rounded-full w-32 h-32 mx-auto' src="https://assets.epicurious.com/photos/644abad6023ad8b411206d1c/1:1/w_344,h_344,c_limit/TiramisuGranita_RECIPE_042623_52596_VOG_final.jpg" alt="" />
                    <h2 className='text-center card-title text-slate-600 mt-4'>Tiramisu Granita</h2>
                </div>
                <div className='mx-auto'>
                    <img className='rounded-full w-32 h-32 mx-auto' src="https://assets.epicurious.com/photos/644fd76a90edaa1540a53f10/1:1/w_344,h_344,c_limit/GrilledPorkAsparagus_RECIPE_042723_52862.jpg" alt="" />
                    <h2 className='text-center card-title text-slate-600 mt-4'>Grilled Pork Tenderloin</h2>
                </div>
                <div className='mx-auto'>
                    <img className='rounded-full w-32 h-32 mx-auto' src="https://assets.epicurious.com/photos/6447e5d7d24917cd9997c5fd/1:1/w_344,h_344,c_limit/Namelaka_RECIPE_042023_51645.jpg" alt="" />
                    <h2 className='text-center card-title text-slate-600 mt-4'>Melted Chocolate</h2>
                </div>
                <div className='mx-auto'>
                    <img className='rounded-full w-32 h-32 mx-auto' src="https://assets.epicurious.com/photos/642af0183f6bd2b08b7bd22b/1:1/w_344,h_344,c_limit/ElvisPoundCake_RECIPE_033023_49941.jpg" alt="" />
                    <h2 className='text-center card-title text-slate-600 mt-4'>Elvis Presley’s Favorite Pound Cake</h2>
                </div>
            </div>
        </div>
    );
};

export default Newestrecipe;