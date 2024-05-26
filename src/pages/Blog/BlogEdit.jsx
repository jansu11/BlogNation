import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchBlogById, updateBlog } from '../../services/apiSevice';


function BlogEdit() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {

     const getBlog = async () => {
      try {
        const blog = await fetchBlogById(id);
        setTitle(blog.title);
        setContent(blog.content);
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
      await updateBlog(id,updateBlog);
      navigate(`/blogs/${id}`);
    } catch (error) {
      console.error('Error updating blog:', error);
    }
  };

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
