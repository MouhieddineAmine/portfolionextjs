"use client";
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setTemoignages } from '../redux/temoignageSlice';

const ListeTemoignage = () => {
  const temoignages = useSelector(state => state.temoignage.temoignages);
  const dispatch = useDispatch();

  useEffect(() => {
    const storedTemoignages = localStorage.getItem('temoignages');
    if (storedTemoignages) {
      dispatch(setTemoignages(JSON.parse(storedTemoignages)));
    }
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem('temoignages', JSON.stringify(temoignages));
  }, [temoignages]);

  return (
    <div className="max-w-[1200px] mx-auto mt-24">
      <h1 className="text-4xl font-bold text-center text-gray-300 mb-12">Liste des Témoignages</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {temoignages && temoignages.map((temoignage) => (
          <div key={temoignage.id} className="bg-gray-800 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-300">{temoignage.name}</h2>
            <p className="mt-4 text-gray-400">{temoignage.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListeTemoignage;
