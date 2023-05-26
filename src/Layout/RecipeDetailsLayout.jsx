import React from 'react';
import NavigationBar from '../pages/shared/NavigationBar';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/shared/Footer';
import { ToastContainer } from 'react-toastify';

const RecipeDetails = () => {
    return (
        <div>
            <NavigationBar></NavigationBar>
            <ToastContainer></ToastContainer>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default RecipeDetails;