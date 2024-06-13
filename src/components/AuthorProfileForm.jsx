import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

const AuthorProfileForm = () => {
  const {auth,loading,createAuthorProfile }  = useContext(AuthContext)
  const [nickName, setAuthorNickname] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate()



  useEffect(() => {
  if(!loading){

    if(auth.token){
      console.log(auth)
      setEmail(auth.user.email)
    }else{

      navigate('/author/login');
    }

  }else{

    console.log(auth.token)
      //navigate('/author/login');
    }



 },[auth,loading,navigate]) 
  



  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createAuthorProfile({nickName,email})

      setMessage('Profile created successfully!');
    } catch (error) {
      console.error('Error creating profile:', error);
      setError('Failed to create profile. Please try again.');
    }
  };

   if (loading) return <div>Loading ... </div>
  if (!auth.token)
    {
      console.log(auth.token)
    return <Navigate to="/author/login" replace />;
  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full bg-white p-6 shadow-md rounded-md">
        <h2 className="text-2xl font-bold mb-4">Create Author Profile</h2>
        {message && <div className="mb-4 text-green-500">{message}</div>}

        {error && <div className="mb-4 text-red-500">{error}</div>}
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
