"use client";
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTemoignage, editTemoignage } from '../redux/temoignageSlice';

const AddEditTemoignage = () => {
  const dispatch = useDispatch();
  const temoignages = useSelector(state => state.temoignage.temoignages);
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [editing, setEditing] = useState(false);
  const [editedId, setEditedId] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (editing && editedId !== null) {
      dispatch(editTemoignage({ id: editedId, name, message }));
      setEditing(false);
      setEditedId(null);
    } else {
      dispatch(addTemoignage({ id: Date.now(), name, message }));
    }

    setName('');
    setMessage('');
  };

  const startEditing = (temoignage) => {
    setEditing(true);
    setEditedId(temoignage.id);
    setName(temoignage.name);
    setMessage(temoignage.message);
  };

  return (
    <div className="max-w-[1200px] mx-auto mt-24">
      <h1 className="text-4xl font-bold text-center text-gray-300 mb-12">
        {editing ? 'Modifier le Témoignage' : 'Ajouter un Témoignage'}
      </h1>
      <form onSubmit={handleSubmit} className="bg-gray-800 p-6 rounded-lg shadow-md mb-8">
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-300">
            Nom
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-color"
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="message" className="block text-gray-300">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="5"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-color"
            required
          ></textarea>
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            className="py-2 px-4 bg-primary-color text-white font-bold rounded-md transition duration-200 hover:bg-primary-color-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-color"
          >
            {editing ? 'Modifier' : 'Ajouter'}
          </button>
        </div>
      </form>
      <h2 className="text-2xl font-bold text-gray-300 mt-20 mb-6">Liste des Témoignages</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {temoignages && temoignages.map((temoignage) => (
          <div key={temoignage.id} className="bg-gray-800 p-6 rounded-lg shadow-md">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-semibold text-gray-300">{temoignage.name}</h2>
              <div>
                <button
                  onClick={() => startEditing(temoignage)}
                  className="ml-4 text-yellow-500 hover:text-yellow-700 focus:outline-none"
                >
                  Modifier
                </button>
              </div>
            </div>
            <p className="text-gray-400">{temoignage.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AddEditTemoignage;
