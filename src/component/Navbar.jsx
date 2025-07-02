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
            <a target="_blank" href="https://www.linkedin.com/in/masrafi-munna-78549535a/recent-activity/all/"><FaLinkedin/></a>
            <a target="_blank" href="https://github.com/masrafimun"><FaGithub/></a>
            <a target="_blank" href="https://www.instagram.com/invites/contact/?utm_source=ig_contact_invite&utm_medium=copy_link&utm_content=usag35y"><FaInstagram/></a>
        </div>
       </nav>
    );
};

export default Navbar;
