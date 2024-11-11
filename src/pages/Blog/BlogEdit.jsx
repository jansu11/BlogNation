import React, { useContext, useEffect, useState } from 'react';
import { useParams, useNavigate, Navigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import QuillEditor from 'react-quill'
import sanitizeHtml from 'sanitize-html'

function BlogEdit() {

  const {auth,loading,fetchBlogById,updateBlog} = useContext(AuthContext)
  const { id } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [snippet,setSnippet] = useState('');
  const [imageUrl,setImageUrl] = useState('')




  useEffect(() => {

     const getBlog = async () => {
      try {
        const response = await fetchBlogById(id);
        setTitle(response.blog.title);
        setContent(response.blog.content);
        setSnippet(response.blog.snippet);
        setImageUrl(response.blog.imageUrl);
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

       const updatedBlog = {title,imageUrl,snippet,content}

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



   const modules = {
    toolbar: [
      [{ 'header': '1'}, {'header': '2'}, { 'font': [] }],
      [{size: []}],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
      ['link', 'image', 'video'],
      ['clean']
    ],
  };

  const formats = [
    'header', 'font', 'size',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image', 'video'
  ];

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
        

        <input type="text"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          placeholder="image src for heading"
          className="p-2 border border-gray-300 rounded"
          required
        />
        <div className=' pb-8'>
            
            <QuillEditor 
              value={snippet}
              onChange={setSnippet}
              modules={modules}
              formats={formats}
              className='bg-white rounded pb-16 shadow h-max'

            />

            <QuillEditor 
              value={content}
              onChange={setContent}
              modules={modules}
              formats={formats}
              className='bg-white rounded pb-16 shadow h-max'

            />

        </div>
        
        <button type="submit" className="p-2 bg-blue-500 text-white">Update</button>

      </form>
    </div>
  );
}

export default BlogEdit;
