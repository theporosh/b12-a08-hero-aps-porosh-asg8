import React, { useState } from 'react';
import { CiSearch } from "react-icons/ci";
import { useLoaderData } from 'react-router';
import AllAppCard from '../AllAppCard/AllAppCard';
import SearchAppCard from '../SearchAppCard/SearchAppCard';


const AllApps = () => {
    const data = useLoaderData();
    // console.log(data);

    const [searchTerm, setSearchTerm] = useState("");

    const filteredApps = data.filter(app => app.title.toLowerCase().includes(searchTerm.toLowerCase())
);
    const showSearchResults = searchTerm.trim().length > 0;

    return (
        <div>
            <div className="bg-gray-50 py-12 px-4 md:px-10">

                <div className="text-center mb-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Our All Applications</h2>
                    <p className="text-gray-500 mt-2">
                        Explore All Apps on the Market developed by us. We code for Millions
                    </p>
                </div>


                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">

                    <p className="text-sm md:text-base font-semibold text-gray-800">
                        <span>({showSearchResults ? filteredApps.length : data.length})</span> Apps Found
                    </p>


                    <div className="relative w-full sm:w-64">
                        <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400"><CiSearch /></svg>

                        <input
                            type="text"
                            placeholder="Search Apps"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full border text-[#627382] border-gray-300 rounded-md py-2 pl-9 pr-3 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        />
                    </div>
                </div>

            </div>

           
            
            {/* filter and display No Aps found using conditionally render */}
             <div className="max-w-6xl mx-auto mb-10">

             {showSearchResults ? ( filteredApps.length > 0 ? (

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {filteredApps.map( singleApp => 
                            <SearchAppCard key={singleApp.id} singleApp={singleApp}></SearchAppCard>
                        )}
                    </div>

                ) : (
                  
                     
                   <div className="text-center">
                     <p className="text-center text-gray-500 text-lg md:text-5xl font-medium py-10">
                        No App Found
                    </p>
                 <a href="/apps" className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl bg-gradient-to-r from-[#632ee3] to-[#9f62f2] text-white rounded-md">Show All Apps</a>
                </div>
                  
                   
                ) 

             ) : (
                // Otherwise show all apps
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-10">
                {
                    data.map(singleApp => <AllAppCard key={singleApp.id} singleApp={singleApp}></AllAppCard>)
                }
            </div>
        ) }



            </div>

        </div>
    );
};

export default AllApps;