import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import { Outlet, useNavigation } from 'react-router';
import Footer from '../../components/Footer/Footer';

const Root = () => {

    const navigation = useNavigation();

    return (
       <div className="relative min-h-screen">
         
        {navigation.state === "loading" && (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50">
          <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}



            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
       </div>
    );
};

export default Root;