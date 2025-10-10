import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { getStoredApp, removeFromStoreDB } from '../../utility/addToDB';
import MyInstallationCard from '../MyInstallationCard/MyInstallationCard';
import { toast } from 'react-toastify';

const MyInstallation = () => {

    const [checkList, setCheckList] = useState([]);
    const [sort, setSort] = useState("");
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

    const handleSort = (type) => {
        setSort(type)
        if (type === "small") {

             const sortedBySmall = [...checkList].sort((a, b) =>
                a.downloads.split("M").join("") -
                b.downloads.split("M").join(""));
                setCheckList(sortedBySmall)
        }
        if (type === "large") {

            const sortedBySmall = [...checkList].sort((a, b) =>
                b.downloads.split("M").join("") -
                a.downloads.split("M").join(""));
                setCheckList(sortedBySmall)

        }
    }

    const handleUninstall = (id, title) => {
        // console.log(checkList)
        // console.log(id)
    const updatedList = checkList.filter(app => app.id !== id);
    // console.log(updatedList);
    setCheckList(updatedList);
    removeFromStoreDB(id);
        
    toast.success(`Your App !! ${title} uninstalled successfully! `);
    
  };

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



                    <select defaultValue="Pick a font" className="select select-ghost text-[#627382]">
                        <option disabled={true}>Sort By Size</option>
                        <option>Sort By Size</option>
                        <option onClick={() => handleSort("small")}>Low-High</option>
                        <option onClick={() => handleSort("large")}>High-Low</option>
                    </select>

                </div>

                {/*  App Cards  */}
                <div className="space-y-4">

                    {
                        checkList.map(a => <MyInstallationCard 
                        
                        key={a.id} singleApp={a} handleUninstall={handleUninstall} >

                        </MyInstallationCard>)
                    }

                </div>
            </div>

        </div>
    );
};

export default MyInstallation;