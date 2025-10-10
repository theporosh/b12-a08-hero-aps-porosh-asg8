import React from 'react';
import logoImg from '../../assets/logo.png';
import { FaGithub } from "react-icons/fa";
import { Link, NavLink } from 'react-router';
import { IoHomeOutline } from "react-icons/io5";
import { IoLogoAppleAppstore } from "react-icons/io5";
import { MdOutlineInstallDesktop } from "react-icons/md";

const Navbar = () => {

    

    const links = <>
        <NavLink className={({ isActive }) =>
            isActive
                ? "text-blue-500 font-semibold border-b-2 border-blue-500 m-2"
                : "text-gray-600 hover:text-blue-400 m-2"
        } to="/">
            <span className="flex items-center gap-2"><IoHomeOutline /> Home</span>
        </NavLink>

        <NavLink className={({ isActive }) =>
            isActive
                ? "text-blue-500 font-semibold border-b-2 border-blue-500 m-2"
                : "text-gray-600 hover:text-blue-400 m-2"
        } to="/apps">
            <span className="flex items-center gap-2"><IoLogoAppleAppstore /> Apps </span>
        </NavLink>

        <NavLink className={({ isActive }) =>
            isActive
                ? "text-blue-500 font-semibold border-b-2 border-blue-500 m-2"
                : "text-gray-600 hover:text-blue-400 m-2"
        } to="/install">
            <span className="flex items-center gap-2"><MdOutlineInstallDesktop /> Installation</span>
        </NavLink>

    </>


    return (

        

            <div className="navbar bg-base-100 shadow-md">
                <div className="navbar-start px-12">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">

                            {links}

                        </ul>
                    </div>

                    <Link className="flex items-center" to="/">
                        <img className="w-10 h-10" src={logoImg} alt="" />
                        <p className="btn btn-ghost text-xl bg-gradient-to-r from-[#632ee3] to-[#9f62f2] bg-clip-text text-transparent font-bold">HERO.IO</p>
                    </Link>

                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">

                        {links}

                    </ul>
                </div>
                <div className="navbar-end px-12">

                    <Link to="https://github.com/theporosh" className="btn bg-gradient-to-r from-[#632ee3] to-[#9f62f2] text-white">
                        <FaGithub />  Contribute </Link>
                </div>
            </div>

       
    );
};

export default Navbar;