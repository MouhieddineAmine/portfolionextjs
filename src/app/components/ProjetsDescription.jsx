import React from 'react';
import Link from 'next/link';


const ProjetsDescription = () => {
  return (
    <div className=" mt-28 mb-36 max-w-[1200px] mx-auto">
      <h2 className="md:text-4xl sm:text-3xl text-xl font-bold mb-20 text-gray-300 text-center">Mes Projets</h2>

      <div className="grid grid-cols-2 gap-8">
  
        <div className="flex flex-col items-center">
          <Link href="/pageprojcannabis" title="Project 1">
            <img src="/CannabisPhoto.png" alt="Project 1" className="h-64 w-[500px] rounded-lg shadow-md hover:shadow-lg transition duration-300" />
          </Link>
          <p className='text-gray-300 mt-5 text-xl font-bold'>Application d'Inventaire de Plantules de Cannabis</p>
          <p className="mt-8 text-gray-400 text-center w-96">Une application de bureau intuitive pour gérer et suivre l'inventaire des plantules de cannabis, facilitant la gestion de la croissance et des stocks.</p>
        </div>

      
        <div className="flex flex-col items-center">
          <Link href="/pageprojblog" title="Project 2">
            <img src="/BlogPhoto.png" alt="Project 2" className="h-64 w-[500px] rounded-lg shadow-md hover:shadow-lg transition duration-300" />
          </Link>
          <p className='text-gray-300 mt-5 text-xl font-bold'>Blog de Finance</p>
          <p className="mt-8 text-gray-400 text-center w-96">Un blog dédié à la finance où je partage des analyses, des conseils pratiques et des stratégies pour optimiser vos finances personnelles et investissements.</p>
        </div>

        
      </div>
    </div>
  );
}

export default ProjetsDescription;
