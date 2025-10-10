import React from 'react';
import { FaStar } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";

const MyInstallationCard = ({ singleApp, handleUninstall }) => {

    const {image, title, downloads, ratingAvg, id} = singleApp;
 
    return (
        <div>

            <div
                className="flex flex-col sm:flex-row items-center justify-between bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-all">

                {/* Left section */}
                <div className="flex items-center gap-4 w-full sm:w-auto">
                    <img
                        src={image}
                        alt=""
                        className="w-16 h-16 rounded-lg object-cover"
                    />
                    <div>
                        <h3 className="text-base font-semibold text-gray-900">
                            {title}
                        </h3>

                        <div className="flex items-center gap-4 mt-1 text-sm text-gray-600">

                            <span className="flex items-center gap-1">
                                <FiDownload className="text-emerald-500" />
                                {downloads} </span>


                            <span className="flex items-center gap-1">
                                <FaStar className="text-orange-400" />
                                {ratingAvg} </span>

                            <span>258 MB</span>
                        </div>
                    </div>
                </div>

                {/* Uninstall Button */}
                <button 
                onClick={() => handleUninstall(id, title)}
                className="mt-3 sm:mt-0 btn bg-[#00d390] text-white btn-sm">
                    Uninstall
                </button>
            </div>

        </div>
    );
};

export default MyInstallationCard;