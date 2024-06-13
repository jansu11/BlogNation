import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { Navigate } from 'react-router-dom';
import CustomReactQuill from '../../components/CustomReactQuill';
import 'react-quill/dist/quill.snow.css'
function BlogCreate() {
  const  { auth, loading,createBlog} =  useContext(AuthContext)
  
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [snippet, setSnippet] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [user, setAuthor] = useState({})
  const [imageUrl,setImageUrl] = useState('')
  const navigate = useNavigate();


 useEffect(() => {
  if(!loading){

    if(auth.token){
      console.log(auth)
      setAuthor(auth.user.userId)
    }else{

      navigate('/author/login');
    }

  }else{

    console.log(auth.token)
      //navigate('/author/login');
    }



 },[auth,loading,navigate]) 
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {

      const authorId = user.id;
      const newBlog = {title,imageUrl,content,snippet,authorId}
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
  if (!auth.token)
    {
      console.log(auth.token)
    return <Navigate to="/author/login" replace />;
  }



  return (
    <div className='max-w-4xl h-full mx-auto p-4 '>
       <h1 className="text-2xl font-bold">Create Blog</h1>
      {successMessage && <div className='text-green-500 mb-4'>{successMessage}</div>}
      <form onSubmit={handleSubmit} className="flex flex-col h-full space-y-4">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          className="p-2 border border-gray-300 rounded"
          required
        />

        <input type="text"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          placeholder="image src for heading"
          className="p-2 border border-gray-300 rounded"
          required
        />
            <CustomReactQuill
              value={snippet}
              onChange={setSnippet}
              height = {'20vh'}
              placeholder='Snippet'
              className='bg-white rounded mb-16 shadow my-4 min-h-40'
              required

            />





              <CustomReactQuill
                value={content}
                onChange={setContent}
                height={'30vh'}
                placeholder='Content'
                className='bg-white rounded pb-16 shadow min-h-60'
                required

              />
             





        <button type="submit" className=" py-2 bg-blue-500 text-white rounded">Create</button>
      </form>
    </div>
  );
}

export default BlogCreate;
