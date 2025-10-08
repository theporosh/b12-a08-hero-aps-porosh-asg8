import React from 'react';
import { CiSearch } from "react-icons/ci";
import { useLoaderData } from 'react-router';
import AllAppCard from '../AllAppCard/AllAppCard';


const AllApps = () => {
    const data = useLoaderData();
    console.log(data);

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
                        <span>({data.length})</span> Apps Found
                    </p>


                    <div className="relative w-full sm:w-64">
                        <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400"><CiSearch /></svg>
                        <input

                            type="text"
                            placeholder="Search Apps"
                            className="w-full border text-[#627382] border-gray-300 rounded-md py-2 pl-9 pr-3 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        />
                    </div>
                </div>

            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-10">
                {
                    data.map(singleApp => <AllAppCard key={singleApp.id} singleApp={singleApp}></AllAppCard>)
                }
            </div>

        </div>
    );
};

export default AllApps;