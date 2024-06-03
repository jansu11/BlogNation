import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { FiLogOut } from 'react-icons/fi';

const LogoutButton = () => {
  const { auth,logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/author/login', { state: { message: 'You have logged out' } });
  };

  return (
    <button
      onClick={handleLogout}
      className="flex items-center space-x-2 text-red-500 hover:text-red-700 transition duration-300"
    >
      <FiLogOut size={24} />
      <span>Logout</span>
    </button>
  );
};

export default LogoutButton;
