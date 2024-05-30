import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { Navigate } from 'react-router-dom';

function BlogCreate() {
  const  { auth, loading,createBlog} =  useContext(AuthContext)
  
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [snippet, setSnippet] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [user, setAuthor] = useState({})
  const navigate = useNavigate();


 useEffect(() => {

  if(!loading){

    if(auth){
      console.log(auth)
      setAuthor(auth.user.userId)
    }else{

      navigate('/author/login');
    }

  }


 },[auth,loading,navigate]) 
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {

      const authorId = user.id;
      const newBlog = {title,content,snippet,authorId}
      const response = await createBlog(newBlog);
      setTimeout(() => {
        setSuccessMessage('');
        navigate(`/blogs/${response.blog._id}`)
      },2000);

    } catch (error) {
      console.error('Error creating blog:', error);
    }
  };

  if (loading) return <div>Loading ... </div>
  if (!auth || !auth.token)
    {
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
          required
        />
        <textarea
          value={snippet}
          onChange={(e) => setSnippet(e.target.value)}
          placeholder="Snippet"
          className="p-2 border border-gray-300"
          required
        />
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Content"
          className="p-2 border border-gray-300"
          required
        />
        <button type="submit" className="p-2 bg-blue-500 text-white">Create</button>
      </form>
    </div>
  );
}

export default BlogCreate;
