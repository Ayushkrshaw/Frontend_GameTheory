import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function RegisterPage() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const response = await axios.post('https://backend-gametheory.onrender.com/api/auth/register', formData);
      console.log('Registration successful:', response?.data);
      navigate('/login'); // Redirect to login page after successful registration
    } catch (err) {
      setError(err.response.data.message || 'Registration failed');
      console.error('Error during registration:', err);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8 flex-grow max-w-md"> {/* Reduced width here */}
        <h2 className="text-3xl font-extrabold text-black mb-8 text-center drop-shadow-md">
          Register
        </h2>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-xl shadow-xl transition duration-300 transform hover:-translate-y-1 hover:shadow-2xl"
        >
          <div className="mb-6">
            <label className="block text-gray-700">Username</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="border-2 border-indigo-300 p-3 rounded-lg w-full text-gray-700 focus:outline-none focus:ring-4 focus:ring-indigo-300 transition duration-200"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="border-2 border-indigo-300 p-3 rounded-lg w-full text-gray-700 focus:outline-none focus:ring-4 focus:ring-indigo-300 transition duration-200"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold text-lg px-6 py-3 rounded-lg shadow-lg hover:from-indigo-600 hover:to-purple-700 transform hover:-translate-y-1 transition duration-300 ease-in-out"
          >
            Register
          </button>
        </form>
      </div>
  
      {/* Footer Section */}
      <footer className="bg-gray-800 text-white text-center py-6 mt-8">
        <p className="text-lg font-semibold">Sports Booking System</p>
        <p className="text-sm text-gray-400 mt-1">© 2024 All rights reserved.</p>
        <div className="flex justify-center space-x-4 mt-4">
          <a
            href="#"
            className="text-gray-400 hover:text-white transition duration-200"
          >
            Privacy Policy
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-white transition duration-200"
          >
            Terms of Service
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-white transition duration-200"
          >
            Contact Us
          </a>
        </div>
      </footer>
    </div>
  );
  
}

export default RegisterPage;
