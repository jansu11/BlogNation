import React, { useEffect, useState, useContext } from 'react';
import { useNavigate , useLocation } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { FaEye, FaEyeSlash, FaRegEyeSlash, FaUser } from 'react-icons/fa';

const LoginForm = () => {
  const {login} = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [message , setMessage] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.state && location.state.message){
      setMessage(location.state.message)
    }
  
  }, [location.state])
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await login(email,password)
      navigate('/author/dashboard');
      // Optionally, you can redirect to another page after successful login
      // For example: window.location.href = '/dashboard';
      
    } catch (error) {
      console.error('Error logging in:', error);
      setError('Invalid email or password');
    }
  };

  return (
    <div className="h-full flex flex-col justify-center items-center bg-gray-100">
      <h1 className='bold text-3xl p-4 uppercase font-bold'>
        Welcome Back!
      </h1>
      <p className='text-xl font-bold'>
        Enter your details
      </p>


      <div className="max-w-md w-full bg-white p-6 shadow-md rounded-md">
        {message && (
            <div className='mb-4 text-green-500'> 
            {message}

            </div>
        )
        }
        {error && <div className="mb-4 text-red-500">{error}</div>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
                  <div className='flex items-center  justify-center'>
                     <FaUser className='mr-3'/>
                     <label htmlFor="email" className="block mb-1">
                      Email:
                     </label>

                  </div>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md"
                  required
                />

          </div>
          <div className="mb-4 ">
            <div className='flex items-center justify-center'>
              <FaEyeSlash className='mr-4'/>
              <label htmlFor="password" className="block mb-1">Password:</label>

            </div>
            
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>


          <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
