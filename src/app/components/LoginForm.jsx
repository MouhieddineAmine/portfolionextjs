"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';
import { login } from '../redux/authSlice';
import { useAuth } from '../context/AuthContext';

const LoginForm = () => {
  const dispatch = useDispatch();
  const { login: authLogin } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(''); // Clear any existing errors
    console.log('Dispatching login action...');
    const result = await dispatch(login({ email, password }));
    console.log('Login action result:', result);
    if (login.fulfilled.match(result)) {
      console.log('Login successful, updating auth context...');
      authLogin(result.payload.token); // Store the token and update auth state
      router.push('/home');
    } else {
      console.error('Login failed:', result.payload); // Handle login failure
      setError('Invalid email or password'); // Set error message
    }
  };

  return (
    <div className="max-w-[400px] mx-auto mt-24">
      <h1 className="text-4xl font-bold text-center text-gray-300 mb-12">Login</h1>
      <form onSubmit={handleSubmit} className="bg-gray-800 p-6 rounded-lg shadow-md">
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
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
            Login
          </button>
        </div>
      </form>
      <button
        type="button"
        onClick={() => router.push('/signupform')}
        className="py-2 mt-10 px-4 bg-primary-color w-full text-white font-bold rounded-md transition duration-200 hover:bg-primary-color-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-color"
      >
        Inscription
      </button>
    </div>
  );
};

export default LoginForm;
