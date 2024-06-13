import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext'
import { FiLogOut, FiLogIn } from 'react-icons/fi';
import Logo from './Logo';

const Navbar = () => {
  const { auth, logout } = useContext(AuthContext);

  const navigate  = useNavigate()
   const handleLogout = () => {
    logout();
    navigate('/');
  };
  return (
    <nav className="bg-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div>
            <Logo/>
            <div>
            <span className='text-gray-700 text-lg font-bold'>Welcome!! {auth?.user?.userId.name}</span>

        </div>

        </div>
        <div>
          {auth && auth.token ? (
            <button
              onClick={handleLogout}
              className="flex items-center  md:space-x-2  text-red-500 hover:text-red-700 font-bold transition duration-300"
            >
              <FiLogOut size={24} />
              <span className='hidden md:flex '>Logout</span>
            </button>
          ) : (
            <Link
              to="/author/login"
              className="flex items-center md:space-x-2 font-bold text-xl text-green-700 hover:text-green-400 transition duration-300"
            >
              <FiLogIn size={24} />
              <span className='hidden md:flex'>Login</span>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
