import React from 'react';
import { Link } from 'react-router';
import errorApp from '../../assets/App-Error.png'

const ErrorApp = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">


            <div className="flex justify-center mb-6">
                <img
                    src={errorApp}
                    alt=""
                    className="w-60 md:w-80 lg:w-96 object-contain"
                />
            </div>


            <h1 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-2">
                OPPS!! APP NOT FOUND
            </h1>
            <p className="text-gray-500 text-sm md:text-base mb-6">
                The App you are requesting is not found on our system.  please try another apps
            </p>


            <Link
                to="/"
                className="bg-gradient-to-r from-[#632ee3] to-[#9f62f2] text-white text-sm md:text-base font-medium px-6 py-2 rounded-lg"
            >
                Go Back!
            </Link>
        </div>
    );
};

export default ErrorApp;