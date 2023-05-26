import React from 'react';
import image from "../../assets/5.jpg"
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <img src={image} alt="Error" className="h-auto w-[50%]" />
            <Link to="/"><button className='btn btn-success text-white font-bold mt-8'>Go Home</button></Link>
        </div>
    );
};

export default Error;