import React from 'react';
import Header from '../pages/shared/Hero';
import { Outlet } from 'react-router-dom';
import NavigationBar from '../pages/shared/NavigationBar';
import Footer from '../pages/shared/Footer';

const Main = () => {
    return (
        <div>
            <NavigationBar></NavigationBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;