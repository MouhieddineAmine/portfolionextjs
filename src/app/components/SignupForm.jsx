"use client";
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../redux/authSlice';
import { useRouter } from 'next/navigation';

const SignupForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter(); 


  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(register({ name, email, password }));
    router.push('/');
  };

  return (
    <div className="max-w-[400px] mx-auto mt-24">
      <h1 className="text-4xl font-bold text-center text-gray-300 mb-12">Signup</h1>
      <form onSubmit={handleSubmit} className="bg-gray-800 p-6 rounded-lg shadow-md">
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-300">Name</label>
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
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-300">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-color"
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block text-gray-300">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-color"
            required
          />
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            className="py-2 px-4 bg-primary-color text-white font-bold rounded-md transition duration-200 hover:bg-primary-color-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-color"
          >
            Signup
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignupForm;
