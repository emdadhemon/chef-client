import React from 'react';

const NewsLetter = () => {
    return (
        <div className='py-32 w-[70%] text-center mx-auto'>
            <h1 className='text-4xl font-bold text-center'>Newsletter</h1>
            <p className='text-md text-center mt-4 mb-10'>Subscribe to our newsletter and follow our content closely. Receive news based on what has to do with you. We <br /> promise not to send promotions you don't like.</p>

            <div className='w-[70%] mx-auto'>
                <input className='lg:inline-block block py-2 ps-4 lg:w-[35%] md:w-[35%] w-full bg-white border-stone-900 border mr-2 mb-2' type="text" placeholder='Your Name' />
                <input className='lg:inline-block block py-2 ps-4 lg:w-[35%] md:w-[35%] w-full  bg-white border border-stone-900 mr-2 mb-2 ' type="email" name="" id="" placeholder='Email' />
                <input className='lg:inline-block block  py-2 ps-4 lg:w-[25%] md:w-[25%] w-[55%] bg-success hover:bg-green-700 hover:text-white' type="submit" value="Subscribe" />

            </div>
        </div>
    );
};

export default NewsLetter;