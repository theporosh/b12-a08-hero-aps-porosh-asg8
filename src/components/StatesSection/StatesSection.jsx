import React from 'react';
import heroImg from '../../assets/hero.png'
const StatesSection = () => {
    return (
         <div className="w-full">
               
                <div className="w-full">
                    <img
                        src={heroImg} 
                        alt=""
                        className="w-full max-w-6xl mx-auto h-auto"
                    />
                </div>

               
                <div className="bg-gradient-to-r from-[#632ee3] to-[#9f62f2] text-white text-center py-14 px-4">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-10">
                        Trusted by Millions, Built for You
                    </h2>

                    <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-10">
                       
                        <div>
                            <p className="text-lg text-white/80">Total Downloads</p>
                            <h3 className="text-4xl font-bold my-4">29.6M</h3>
                            <p className="text-sm text-white/80">21% more than last month</p>
                        </div>

                       
                        <div>
                            <p className="text-lg text-white/80">Total Reviews</p>
                            <h3 className="text-4xl font-bold my-4">906K</h3>
                            <p className="text-sm text-white/80">46% more than last month</p>
                        </div>

                       
                        <div>
                            <p className="text-lg text-white/80">Active Apps</p>
                            <h3 className="text-4xl font-bold my-4">132+</h3>
                            <p className="text-sm text-white/80">31 more will Launch</p>
                        </div>
                    </div>
                </div>
            </div>

    );
};

export default StatesSection;