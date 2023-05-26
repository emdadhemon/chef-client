import React from 'react';
import Header from '../shared/Hero';
import PopularChef from './PopularChef';
import Newestrecipe from './Newestrecipe';
import NewsLetter from './NewsLetter';

const Home = () => {
    return (
        <div className='bg-stone-300'>
            <Header></Header>
            <PopularChef></PopularChef>
            <Newestrecipe></Newestrecipe>
            <NewsLetter></NewsLetter>
        </div>
    );
};

export default Home;