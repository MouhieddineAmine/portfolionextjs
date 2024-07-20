import React from 'react'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'

const Footer = () => {
  return (
    <div className='mt-14 pt-8 pb-5 w-max-[800px] border-t border-gray-500 text-center'>
      <h2 className='text-2xl font-bold text-gray-400 mb-6'>Voici Mes Profils</h2>
      <div className="inline-flex text-gray-400 gap-10 text-5xl">
        <a target='_blank' href='https://github.com/MouhieddineAmine'><AiFillGithub /></a>
        <a target='_blank' href='https://www.linkedin.com/in/mouhieddine-amine-0b9837269/'><AiFillLinkedin /></a>
      </div>
    </div>
  )
}

export default Footer