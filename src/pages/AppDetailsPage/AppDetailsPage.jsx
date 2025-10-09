import React, { useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import dwlImg from '../../assets/icon-downloads.png';
import starImg from '../../assets/icon-ratings.png';
import revImg from '../../assets/icon-review.png';
import { toast } from "react-toastify";


const AppDetailsPage = () => {

    const { id } = useParams();
    const appId = parseInt(id);
    // console.log(id)
    const data = useLoaderData();
    // console.log(data);
    const singleApp = data.find(app => app.id === appId)
    console.log(singleApp);
    // console.log(typeof id, data)

    const {image, title, downloads, ratingAvg, reviews, ratings, description} = singleApp;

    // Installation state
  const [isInstalled, setIsInstalled] = useState(false);

  const handleInstall = () => {
    setIsInstalled(true);
    toast.success(`Yahoo !! ${title} Installed Successfully `);

  };

    return (
        <div>

            <div className="min-h-screen bg-white text-gray-800 px-4 md:px-10 py-10">
      {/*  Header Section  */}
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-10">
        {/* App Icon */}
        <div className="flex-shrink-0">
          <img
            src={image}
            alt=""
            className="w-24 h-24 md:w-60 md:h-60 object-contain"
          />
        </div>

        {/* App Info */}
        <div className="flex flex-col gap-2 text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-bold">
            {title}
          </h2>
          <p className="text-sm text-gray-500">
            Developed by
            <span className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent font-semibold ml-1">
              productive.io
            </span>
          </p>

          {/* Stats Section */}
          <div className="flex flex-wrap justify-center md:justify-start gap-6 mt-3">

            <div className="flex flex-col items-center">
              <img className="text-xl" src={dwlImg} alt="" />
              <span className="text-sm text-gray-500">Downloads</span>
              <p className="font-bold text-xl">{downloads}</p>
            </div>

            <div className="flex flex-col items-center">
               <img className="text-xl" src={starImg} alt="" />
               <span className="text-sm text-gray-500">Average Ratings</span>
               <p className="font-bold text-xl">{ratingAvg}</p>
            </div>

            <div className="flex flex-col items-center">
               <img className="text-xl" src={revImg} alt="" />
              <span className="text-sm text-gray-500">Total Reviews</span>
              <p className="font-bold text-xl">{reviews}</p>
            </div>
          </div>

           {/* Install Button */}
          <button 
          onClick={handleInstall} 
          disabled={isInstalled}
          className="mt-5 bg-[#00d390] text-white px-6 py-2 rounded-md hover:bg-green-700 transition-all text-sm md:text-base">

         {isInstalled ? "Installed" : "Install Now (291 MB)"}

          </button>
        </div>
      </div>

       {/* ---------- Ratings Chart ---------- */}

      <div className="mt-12">
        <h3 className="text-xl md:text-2xl font-semibold mb-4">Ratings</h3>
        <div className="w-full h-64 md:h-72 bg-gray-50 border rounded-lg p-4">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              layout="vertical"
              data={ratings}
              margin={{ top: 10, right: 20, bottom: 10, left: 40 }}
            >
              <XAxis type="number" />
              <YAxis type="category" dataKey="name" />
              <Tooltip />
              <Bar dataKey="count" fill="#ff8811" radius={[0, 8, 8, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
      

      {/* Description */}
      <div className="mt-12">
        <h3 className="text-xl md:text-2xl font-semibold mb-3">
          Description
        </h3>
        <p className="text-gray-600 leading-relaxed text-justify max-w-4xl">
          {description}
        </p>
      </div>
    </div>


           
        </div>
    );
};

export default AppDetailsPage;