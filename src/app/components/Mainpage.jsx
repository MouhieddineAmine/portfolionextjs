"use client";
import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

const Mainpage = () => {
  return (
    <div className='max-w-[1350px] h-[80vh] md:ml-40 mx-auto mt-24 flex flex-col-reverse sm:flex-row justify-center align-center'>
      <div className='flex-col w-full sm:w-3/5 my-auto'>
        <p className='md:text-5xl sm:text-4xl text-xl font-bold text-gray-200'>Bonjour!</p>
        <h1 className='md:text-6xl sm:text-5xl text-4xl font-bold md:py-6'>
          <TypeAnimation
            sequence={[
              "Je M'appelle",
              1000,
              'Mouhieddine Amine',
              1000,
            ]}
            wrapper='span'
            speed={50}
            repeat={Infinity}
          />
        </h1>
        <div className='flex'>
          <p className='md:text-xl sm:text-xl text-xl font-bold text-gray-400'>
            Je suis programmeur, investisseur et passionné d'automobiles.<br /> J'aime créer des solutions innovantes en programmation,<br /> identifier des opportunités financières et suivre les dernières<br /> tendances automobiles.
          </p>
        </div>
        <div className='relative inline-flex group my-3 mt-20'>
          <div className='absolute transition-all duration-1000 opacity-70 inset-px bg-gradient-to-r from-[#44BCFF] via-[#44BCFF] to-[#44BCFF] rounded-xl blur-md group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200'></div>
          <a
            href='/CV.docx'
            title='Download CV'
            role='button'
            className='w-[190px] h-[60px] relative inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white transition-all duration-200 bg-primary-color font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900'
          >
            Download CV
          </a>
        </div>
      </div>

      <div className='w-full sm:w-2/5 my-auto ml-auto'>
        <img className='w-[200px] sm:w-[300px] mx-auto h-auto' src="/MyImage.png" alt='image' />
      </div>
    </div>
  );
};

export default Mainpage;
