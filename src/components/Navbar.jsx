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
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Logo/>
        <div>
            <span className='bg-white'>Hello {auth?.user?.userId.name}</span>

        </div>
        <div>
          {auth && auth.token ? (
            <button
              onClick={handleLogout}
              className="flex items-center space-x-2 text-red-500 hover:text-red-700 transition duration-300"
            >
              <FiLogOut size={24} />
              <span>Logout</span>
            </button>
          ) : (
            <Link
              to="/author/login"
              className="flex items-center space-x-2 text-green-500 hover:text-green-700 transition duration-300"
            >
              <FiLogIn size={24} />
              <span>Login</span>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
