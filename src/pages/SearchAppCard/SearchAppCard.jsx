import React from 'react';
import dwlImg from '../../assets/icon-downloads.png'
import starImg from '../../assets/icon-ratings.png'

const SearchAppCard = ({ singleApp }) => {

    console.log(singleApp);
    const { image, title, ratingAvg, downloads } = singleApp;
    return (
        <div>

         {/* Card Start  */}
            <div className="bg-white p-5 rounded-xl shadow-md flex flex-col items-center">
                <img className="w-full h-56 object-cover bg-gray-300 rounded-lg mb-4" src={image} alt="" />
                <h2 className="text-sm font-semibold text-center mb-3 text-[#001931]">{title}</h2>

                <div className="flex gap-30 mt-auto">

                    <div className="bg-[#f1f5e8] flex items-center">
                        <img className="w-3 h-3" src={dwlImg} alt="" />
                        <span className="text-[#00d390] text-xs px-2 py-1 rounded">
                            {downloads}</span>
                    </div>

                    <div className="bg-[#fff0e1] flex items-center">
                        <img className="w-3 h-3" src={starImg} alt="" />
                        <span className="text-[#ff8811] font-medium text-xs px-2 py-1 rounded
                                    ">{ratingAvg}</span>
                    </div>
                </div>

            </div>
            {/* Card End  */}

        </div>
    );
};

export default SearchAppCard;