import React ,{useContext, useEffect, useReducer} from 'react';
import { useParams, useNavigate, Navigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

function BlogDelete() {
  const { id } = useParams();
  const navigate = useNavigate();
  const  {auth,loading, deleteBlog} =  useContext(AuthContext)

  
  const handleDelete = async () => {

    try {
      await deleteBlog(id)
      navigate('/');
    } catch (error) {
      console.error('Error deleting blog:', error);
    }
  };
  const handleCancel = () => {
    navigate(`/blogs/${id}`);
  }
  if (loading) return <div>Loading...</div>

  if (!auth || !auth.token){
    return <Navigate to="/author/login" replace />;
  }

  return (
    <div>
      <h1 className="text-2xl font-bold">Delete Blog</h1>
      <p>Are you sure you want to delete this blog?</p>
      <div className='flex space-x-4 mt-4'>
        <button onClick={handleDelete} className="p-2 bg-red-500 text-white">Delete</button>
        <button onClick={handleCancel} className="p-2 bg-gray-500 text-white">Cancel</button>
      

      </div>
    </div>
  );
}

export default BlogDelete;
