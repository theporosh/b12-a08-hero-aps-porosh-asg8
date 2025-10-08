import React from 'react';
import playImg from '../../assets/playstore.png'
import appImg from '../../assets/appstore.png'
import StatesSection from '../StatesSection/StatesSection';
import { Link } from 'react-router';


const Banner = () => {
    return (
        <div className="text-center mt-20 px-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-5 leading-tight">We Build <br /> <span className="bg-gradient-to-r from-[#632ee3] to-[#9f62f2] bg-clip-text text-transparent">Productive</span> Apps</h1>
            <p className="max-w-4xl text-base sm:text-lg md:text-xl mx-auto mb-10">At HERO.IO , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. Our goal is to turn your ideas into digital experiences that truly make an impact.</p>

            <div className="mb-10">

                <Link to="https://play.google.com/store/games?hl=en" className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl mr-5 text-xl">
                    <img className="w-5 h-5" src={playImg} alt="" />
                    Google Play</Link>

                <Link to="https://www.apple.com/app-store/" className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl text-xl">
                    <img className="w-5 h-5" src={appImg} alt="" />
                    App Store</Link>
            </div>

           
            {/* States Section */}
           <StatesSection></StatesSection>

        </div>


    );
};

export default Banner;