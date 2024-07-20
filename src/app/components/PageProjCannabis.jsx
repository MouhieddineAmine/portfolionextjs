
import React from 'react'

const PageProjCannabis = () => {
  return (
    <div className='max-w-[1200px] mx-auto mt-24 p-4'>
      <h1 className='text-4xl font-bold text-gray-300 text-center mb-10'>Projet d'Inventaire de Plantules de Cannabis (WeedWise)</h1>
    
            <img src="/CannabisPhoto.png" alt="Project 1" className="rounded-lg shadow-md hover:shadow-lg transition duration-300" />
      
      <div className='bg-gray-800 text-white mt-12 p-6 rounded-lg shadow-md'>
        <h2 className='text-3xl font-semibold mt-4 mb-8'>Description du Projet</h2>
        <p className='text-lg mb-6'>
          Ce projet est une application de bureau développée en WPF (Windows Presentation Foundation) pour la gestion et le suivi de l'inventaire des plantules de cannabis. L'application permet de suivre la croissance, de gérer les stocks et de générer des rapports détaillés. Elle utilise Entity Framework pour l'accès aux données, une bibliothèque pour lire des fichiers Excel pour l'importation de données, et une autre pour générer des QR codes pour chaque plantule.
        </p>
        
        <h2 className='text-3xl font-semibold mt-20 mb-8'>Technologies Utilisées</h2>
        <ul className='list-disc list-inside space-y-2 mb-5' >
          <li className='text-lg'>WPF (Windows Presentation Foundation)</li>
          <li className='text-lg'>Entity Framework</li>
          <li className='text-lg'>Bibliothèque pour lire des fichiers Excel (EPPlus)</li>
          <li className='text-lg'>Bibliothèque pour générer des QR codes (QRCoder)</li>
          <li className='text-lg'>Base de données SQL</li>
        </ul>
      </div>
    </div>
  )
}

export default PageProjCannabis