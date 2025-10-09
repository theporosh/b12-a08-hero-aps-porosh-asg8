import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { getStoredApp } from '../../utility/addToDB';
import MyInstallationCard from '../MyInstallationCard/MyInstallationCard';

const MyInstallation = () => {

    const [checkList, setCheckList] = useState([])
    const data = useLoaderData();
    // console.log(data);

    useEffect(() => {
        const storedAppData = getStoredApp();
        // console.log(storedAppData);
        const convertedStoredApps = storedAppData.map(id => parseInt(id))
        // console.log(convertedStoredApps)
        const myAppList = data.filter(app => convertedStoredApps.includes(app.id));
        // console.log(myAppList)
        setCheckList(myAppList)

    }, [])

    return (
        <div>


            <div className="min-h-screen bg-gray-50 px-4 md:px-10 py-10">


                {/* Header  */}
                <div className="text-center mb-10">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                        Your Installed Apps
                    </h2>
                    <p className="text-gray-500 mt-2">
                        Explore All Trending Apps on the Market developed by us
                    </p>
                </div>

                {/*  Top Controls */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
                    <p className="font-semibold text-gray-700">
                        <span>{checkList.length}</span> Apps Found
                    </p>

                    {/* Sort Dropdown (from DaisyUI) */}
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn bg-white text-[#627382] border">
                            Sort By Size ⬇️
                        </div>
                        <ul
                            tabIndex={0}
                            className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
                        >
                            <li><a>Small to Large</a></li>
                            <li><a>Large to Small</a></li>
                        </ul>
                    </div>
                </div>

                {/*  App Cards  */}
                <div className="space-y-4">

                    {
                        checkList.map(a => <MyInstallationCard key={a.id} singleApp={a} ></MyInstallationCard>)
                    }


                    <p className="text-center text-gray-500 text-lg font-medium py-10">
                        No Installed Apps Found
                    </p>

                </div>
            </div>

        </div>
    );
};

export default MyInstallation;