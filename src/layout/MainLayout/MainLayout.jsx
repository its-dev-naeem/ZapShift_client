import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../../pages/Shared/Navbar/Navbar';
import Footer from '../../pages/Shared/Footer/Footer';

const MainLayout = () => {
    return (
        <div className=' max-w-7xl mx-auto px-2'>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;