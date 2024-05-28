import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { createBlog } from '../../services/apiSevice';
import { AuthContext } from '../../context/AuthContext';
import { Navigate } from 'react-router-dom';
import {jwtDecode} from 'jwt-decode';

function BlogCreate() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();
  const [successMessage, setSuccessMessage] = useState('');
  const  {isAuthenticated} =  useContext(AuthContext)
  const [user, setAuthor] = useState({})

 useEffect(() => {
  try{
    const authToken = localStorage.getItem('authToken');
    const user = jwtDecode(authToken)
    setAuthor(user.userId)
 

  }catch(err){
    navigate('/author/login')

  }


 },[]) 
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {

      const authorId = user.id
      const newBlog = {title,content,authorId}
      const response = await createBlog(newBlog)
      console.log(response)
      navigate(`/blogs/${response.blog._id}`)


    } catch (error) {
      console.error('Error creating blog:', error);
    }
  };
  if (!isAuthenticated){
    return <Navigate to="/author/login" replace />;
  }

  return (
    <div>
      <h1 className="text-2xl font-bold">Create Blog</h1>
      {successMessage && <div className='text-green-500 mb-4'>{successMessage}</div>}
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          className="p-2 border border-gray-300"
        />
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Content"
          className="p-2 border border-gray-300"
        />
        <input
          type="text"
          value={user.email}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          className="p-2 border border-gray-300"
        />
        <button type="submit" className="p-2 bg-blue-500 text-white">Create</button>
      </form>
    </div>
  );
}

export default BlogCreate;
