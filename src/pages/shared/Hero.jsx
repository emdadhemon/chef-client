import React from 'react';
import first from "../../assets/1.jpg"
import second from "../../assets/2.jpg"
import third from "../../assets/3.jpg"
import fourth from "../../assets/4.jpg"
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'
const Header = () => {
    return (
        <div>
            <Carousel className='text-center' showThumbs={false} emulateTouch>
                <div className='relative'>
                   <img src={first} className='h-96 object-cover object-right-bottom' />
                    <div className="carousel-caption absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
                        <h1 className="text-4xl font-bold mb-4">Welcome to Our <br /> <span className='text-4xl font-bold'>Spicy_Kitchen</span> </h1>
                        <p className="lg:text-md sm:text-sm mt-6">
                            Quality and freshness come first. Our mission is to provide our <br /> customers with the finest selection of locally sourced and globally inspired food products, all at competitive prices.</p>
                    </div>
                </div>
                <div className='relative'>
                    <img src={second} className='h-96 object-cover object-bottom' />
                    <div className="carousel-caption absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
                        <h1 className="text-4xl  font-bold mb-4">Welcome to Our <br /><span className='text-4xl font-bold'>Spicy_Kitchen</span> </h1>
                        <p className="lg:text-md sm:text-sm mt-6">
                            Quality and freshness come first. Our mission is to provide our <br /> customers with the finest selection of locally sourced and globally inspired food products, all at competitive prices.</p>
                    </div>
                </div>
                <div className='relative'>
                    <img src={third} className='h-96 object-cover' />
                    <div className="carousel-caption absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
                        <h1 className="text-4xl font-bold mb-4">Welcome to Our <br /> <span className='text-4xl  font-bold'>Spicy_Kitchen</span> </h1>
                        <p className="lg:text-md sm:text-sm mt-6">
                            Quality and freshness come first. Our mission is to provide our <br /> customers with the finest selection of locally sourced and globally inspired food products, all at competitive prices.</p>
                    </div>
                </div>
                <div className='relative'>
                    <img src={fourth} className='h-96 object-cover' />
                    <div className="carousel-caption absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
                        <h1 className="text-4xl font-bold mb-4">Welcome to Our <br /> <span className='text-4xl font-bold'>Spicy_Kitchen</span> </h1>
                        <p className="lg:text-md sm:text-sm mt-6">
                            Quality and freshness come first. Our mission is to provide our <br /> customers with the finest selection of locally sourced and globally inspired food products, all at competitive prices.</p>
                    </div>
                </div>
            </Carousel>
        </div>
    );
};

export default Header;