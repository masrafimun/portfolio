import React from 'react';
import logo from '../assets/my-logo.png'
import { FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';

const Navbar = () => {
    return (
       <nav className='mb-20 px-8   bg-cyan-50  flex items-center justify-between'>
        <div className='flex flex-shrink-0 items-center'>
            <img className='h-16' src={logo} alt="" />
        </div>

        <div className='m-8 gap-4 text-2xl text-black flex items-center justify-center'>
            <FaLinkedin/>
            <FaGithub/>
            <FaInstagram/>
        </div>
       </nav>
    );
};

export default Navbar;