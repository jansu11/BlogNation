import React, { useContext, useEffect, useState } from 'react';
import { useParams, useNavigate, Navigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';


function BlogEdit() {

  const {auth,loading,fetchBlogById,updateBlog} = useContext(AuthContext)
  const { id } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');




  useEffect(() => {

     const getBlog = async () => {
      try {
        const response = await fetchBlogById(id);
        setTitle(response.blog.title);
        setContent(response.blog.content);
      } catch (error) {
        console.error('Error fetching blog:', error);
        setError('Failed to load blog');
      }
    };

    getBlog();

  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const updatedBlog = {title,content};
      await updateBlog(id,updatedBlog);
      navigate(`/blogs/${id}`);
    } catch (error) {
      console.error('Error updating blog:', error);
    }
  };

  if(loading) return <div>loading...</div>

  if (!auth || !auth.token){
    return <Navigate to="/author/login" replace />;
  }

  return (
    <div>
      <h1 className="text-2xl font-bold">Edit Blog</h1>
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
        <button type="submit" className="p-2 bg-blue-500 text-white">Update</button>
      </form>
    </div>
  );
}

export default BlogEdit;
