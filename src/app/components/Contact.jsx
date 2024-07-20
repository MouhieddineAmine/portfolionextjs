"use client";
import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [formValid, setFormValid] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (formData.name && formData.email && formData.message) {
      setFormValid(true);
    } else {
      setFormValid(false);
    }
    setFormSubmitted(true);
  };

  return (
    <div className="max-w-[1200px] mx-auto mt-24">
      <h1 className="text-4xl font-bold text-center text-gray-300 mb-12">Contactez-moi</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    
        <div className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-gray-300">Formulaire de Contact</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-300">Nom</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-color"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-300">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-color"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-gray-300">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-color"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-primary-color text-white font-bold rounded-md transition duration-200 hover:bg-primary-color-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-color"
            >
              Envoyer
            </button>
          </form>
          {formSubmitted && (
            <p className={`mt-4 ${formValid ? 'text-green-600' : 'text-red-600'}`}>
              {formValid ? 'Bien reçu!' : 'Veuillez remplir tous les champs.'}
            </p>
          )}
        </div>
        
    
        <div className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl text-gray-300 font-semibold mb-10">Informations de Contact</h2>
          <div className="mb-4">
            <p className="text-gray-300"><span className="font-bold">Adresse:</span> 6910 Boul Pie IX, Montreal, Canada</p>
          </div>
          <div className="mb-4">
            <p className="text-gray-300"><span className="font-bold">Email:</span> mouhiddine.amine1@gmail.com</p>
          </div>
          <div className="mb-4">
            <p className="text-gray-300"><span className="font-bold">Téléphone:</span> +1 514-570-0463</p>
          </div>
          <div>
            <p className="text-gray-300"><span className="font-bold">Réseaux Sociaux:</span> <a href='https://www.linkedin.com/in/mouhieddine-amine-0b9837269/' target='_blank' className="text-primary-color hover:underline">LinkedIn</a>, <a href='https://github.com/MouhieddineAmine' target='_blank' className="text-primary-color hover:underline">GitHub</a></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
