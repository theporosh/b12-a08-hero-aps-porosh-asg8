import React from 'react';
import TrendingApp from '../TrendingApp/TrendingApp';
import { Link } from 'react-router';

const TrendingApps = ({data}) => {
    return (
        <div className="text-center mt-20 py-12 px-4">
            <h1 className="text-5xl font-bold mb-4">Trending Apps</h1>
            <p className="mb-10">Explore All Trending Apps on the Market developed by us</p>

            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-10">
            {
                data.map(singleApp => <TrendingApp key={singleApp.id} singleApp={singleApp}></TrendingApp>)
            }
            </div>

            <Link to="/apps" className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl bg-gradient-to-r from-[#632ee3] to-[#9f62f2] text-white rounded-md">Show All</Link>
        </div>
    );
};

export default TrendingApps;