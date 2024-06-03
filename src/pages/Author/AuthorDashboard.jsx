import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthContext.jsx';
import { useNavigate, useLocation ,Link} from 'react-router-dom';
import AuthorProfileForm from '../../components/AuthorProfileForm.jsx';
import Modal from '../../components/Modal.jsx';
import instance from '../../services/api.js';

const AuthorDashboard = () => {
  const { auth, logout } = useContext(AuthContext);
  const [isRegistered, setIsRegistered] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const message = location.state?.message;

  useEffect(() => {
    const checkAuthorProfile = async () => {
      if (auth?.user?.userId?.id) {
        try {
          const response = await instance.get(`author/${auth.user.userId.id}`);
          if (!response.data.author) {
            setIsRegistered(false);
            setShowModal(true);
          }
        } catch (error) {
          setIsRegistered(false);
          setShowModal(true);
        }
      }
    };

    checkAuthorProfile();
  }, [auth]);

  const handleCreateBlog = () => navigate('/blogs/create');
  const handleLogout = () => {
    logout();
    navigate('/')
  };


  if (!auth?.user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4">
      {message && <div className="mb-4 text-green-500">{message}</div>}
      <h1 className="text-2xl font-bold">Author Dashboard</h1>
      {auth.user && (
        <div className="mt-4">
          <p className="text-lg">Welcome, {auth.user.userId.name}!</p>
          <p className="text-lg">Email: {auth.user.userId.email}</p>
        </div>
      )}
      <button
        onClick={handleCreateBlog}
        className="mt-4 bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition duration-300"
      >
        Create New Blog
      </button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <AuthorProfileForm />
        </Modal>
      )}
      <div>
      <Link to={`/blogs`}>
      <button
        className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transition duration-300"
      >
        View All Blogs
      </button>
      </Link>
      </div>

      <button
        onClick={handleLogout}
        className="mt-4 bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transition duration-300"
      >
        Logout
      </button>
    </div>
  );
};

export default AuthorDashboard;
