import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createBlog } from '../../services/apiSevice';

function BlogCreate() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {


      const newBlog = {title,content}
      const response = await createBlog(newBlog)
      console.log(response)


    } catch (error) {
      console.error('Error creating blog:', error);
    }
  };

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
        <button type="submit" className="p-2 bg-blue-500 text-white">Create</button>
      </form>
    </div>
  );
}

export default BlogCreate;
