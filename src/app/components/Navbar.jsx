"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const { isAuthenticated, handleLogout } = useAuth();

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className='text-gray-400 flex justify-between items-center max-w-[1350px] mx-auto h-24 px-1 text-l'>
      <h1 className='text-3xl font-bold primary-color ml-1'>Mouhieddine Amine</h1>
      <ul className='hidden md:flex'>
        <li className='p-2'><Link href='/home'>Home</Link></li>
        <li className='p-2'><Link href='/pageprojcannabis'>Projet Inventaire Cannabis</Link></li>
        <li className='p-2'><Link href='/pageprojblog'>Projet Blog</Link></li>
        <li className='p-2'><Link href='/contact'>Contact</Link></li>
        <li className='p-2'><Link href='/listetemoignage'>Liste Temoignages</Link></li>
        <li className='p-2'><Link href='/gerertemoignage'>Gerer Temoignages</Link></li>
        {isAuthenticated ? (
          <li className='p-2 cursor-pointer text-red-400' onClick={handleLogout}>Disconnect</li>
        ) : (
          <>
            <li className='p-2 text-green-400'><Link href='/'>Login</Link></li>
          </>
        )}
      </ul>

      <div onClick={handleNav} className='block md:hidden'>
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      <div className={nav ? 'text-gray-300 fixed h-full left-0 top-0 w-[60%] border-r border-r-gray-900 bg-[#202121] ease-in-out duration-500' : 'fixed left-[-100%]'}>
        <h1 className='text-3xl primary-color m-4'>Mouhieddine Amine</h1>
        <ul className='p-8 text 2xl'>
          <li className='p-5'><Link href='/home'>Home</Link></li>
          <li className='p-5'><Link href='/pageprojcannabis'>Projet Inventaire Cannabis</Link></li>
          <li className='p-5'><Link href='/pageprojblog'>Projet Blog</Link></li>
          <li className='p-5'><Link href='/contact'>Contact</Link></li>
          <li className='p-5'><Link href='/listetemoignage'>Liste Temoignages</Link></li>
          <li className='p-5'><Link href='/gerertemoignage'>Gerer Temoignages</Link></li>
          {isAuthenticated ? (
          <li className='p-2 cursor-pointer text-red-400' onClick={handleLogout}>Disconnect</li>
        ) : (
          <>
            <li className='p-2 text-green-400'><Link href='/'>Login</Link></li>
          </>
        )}
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
