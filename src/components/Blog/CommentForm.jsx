// components/CommentForm.jsx
import React, { useState, useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';

const CommentForm = ({ blogId, onCommentAdded }) => {
  const { createComment,auth,loading } = useContext(AuthContext);
  console.log(auth)
  const [content, setContent] = useState('');


  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if(auth.user.userId.name)
      {
      const author = auth.user.userId.name; // Assuming `name` is a property of the user
      const email = auth.user.userId.email;
    try{
      const response =  await createComment({email,author,content,blogId})
      onCommentAdded(response.userComment);
      setContent('');

    }catch(err)  {
      console.log(err)
    }

      }



  };
  if(loading)
    {
      return <div>Loading ... </div>
    }
  if (!auth.token || !auth.user.userId.name)
    {
      return <div>
               
            <div className='mt-5 mb-5 p-4 border-t-4 border-red-400'>
              <div className='text-start text-2xl mb-4'>
                Join the Conversation. Leave A Reply.
              </div>
              <div>
              <span className='text-sm text-red-300
                mb-3 text-start
                
             '> You need to login to post a comment</span>

              </div>
              <form onSubmit={handleSubmit} className="flex flex-col   space-y-4">
                <textarea
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  placeholder="Add a comment"
                  className="p-2 border border-gray-300 rounded-md"
                  required
                />
                <button type="submit" disabled className="p-2 bg-gray-400 text-white rounded-md">Submit</button>
              </form>

            </div>



      </div>
    }
  return (
    <div className='mt-5 mb-6 p-4 border-t-4 border-red-400'>
      <div className='text-start text-2xl mb-4'>
        Join the Conversation. Leave A Reply.
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col   space-y-4">
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Add a comment"
          className="p-2 border border-gray-300 rounded-md"
          required
        />
        <button type="submit" className="p-2 bg-red-400 text-white rounded-md">Submit</button>
      </form>

    </div>
  );
};

export default CommentForm;
