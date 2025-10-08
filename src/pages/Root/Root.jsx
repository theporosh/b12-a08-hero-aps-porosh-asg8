import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../../components/Footer/Footer';

const Root = () => {
    return (
       <div>
         <div className="max-w-6xl mx-auto">
            <Navbar></Navbar>
        </div>
            <Outlet></Outlet>
            <Footer></Footer>
       </div>
    );
};

export default Root;