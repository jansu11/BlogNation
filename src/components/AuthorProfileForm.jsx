import React, { useContext, useEffect, useState } from 'react';
import instance from '../services/api';

const AuthorProfileForm = () => {
  const [nickName, setAuthorNickname] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [token,setToken] = useState('') ;


  useEffect(() => 
  {

    const token = localStorage.getItem('authToken');
    console.log(token)
    if (token) {
      setToken(token)
    }


  },[])
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send data to the backend (replace with your endpoint)
      const response = await instance.post('/author/',
       { nickName, email },
       {
        headers:{'Authorization': `Bearer ${token}`}
       }
      );
      setMessage('Profile created successfully!');
    } catch (error) {
      console.error('Error creating profile:', error);
      setMessage('Failed to create profile. Please try again.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full bg-white p-6 shadow-md rounded-md">
        <h2 className="text-2xl font-bold mb-4">Create Author Profile</h2>
        {message && <div className="mb-4 text-green-500">{message}</div>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="authorNickname" className="block mb-1">Author Nickname:</label>
            <input
              type="text"
              id="authorNickname"
              value={nickName}
              onChange={(e) => setAuthorNickname(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-1">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300">
            Create Profile
          </button>
        </form>
      </div>
    </div>
  );
};

export default AuthorProfileForm;
