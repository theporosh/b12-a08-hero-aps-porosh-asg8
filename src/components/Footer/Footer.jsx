import React from 'react';
import logoImg from '../../assets/logo.png';
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";

const Footer = () => {
    return (
        <footer className="bg-neutral text-neutral-content px-8 py-10">
            <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
                <aside className="flex-1">
                    <img className="w-10 h-10" src={logoImg} alt="" />
                    <p className="font-bold">
                        HERO.IO App Company Ltd.
                        <br />
                        We are Providing reliable any app for your life easier since 1989
                    </p>
                </aside>
                <nav className="flex flex-col items-start">
                    <h6 className="text-white font-semibold">Join with us on Social Links</h6>
                    <div className="flex gap-4 text-xl">
                        <a> <FaFacebook /> </a>
                        <a> <FaXTwitter /> </a>
                        <a> <FaLinkedin /> </a>
                        <a> <MdOutlineMail /> </a>
                    </div>
                </nav>
            </div>

            <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-400">
                <p>Copyright © 2025 - All rights reserved Hero.io App</p>
            </div>

        </footer>

    );
};

export default Footer;