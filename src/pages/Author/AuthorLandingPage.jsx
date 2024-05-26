// src/components/AuthorLandingPage.js
import React from 'react';
import { Link } from 'react-router-dom';

const AuthorLandingPage = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
      <h1 className="text-4xl font-bold mb-8">Welcome Authors</h1>
      <p className="mb-6 text-lg">Join our platform to share your stories and connect with readers.</p>
      <div className="flex space-x-4">
        <Link to="/author/signup" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300">
          Sign Up
        </Link>
        <Link to="/author/login" className="bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600 transition duration-300">
          Login
        </Link>
      </div>
    </div>
  );
};

export default AuthorLandingPage;
