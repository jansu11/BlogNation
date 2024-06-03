// components/CommentForm.jsx
import React, { useState, useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';

const CommentForm = ({ auth,blogId, onCommentAdded }) => {
  const { createComment } = useContext(AuthContext);
  console.log(auth)
  const [content, setContent] = useState('');


  const handleSubmit = async (e) => {
    e.preventDefault();
    const author = auth.user.userId.name; // Assuming `name` is a property of the user
    const email = auth.user.userId.email;

    try{
      const response =  await createComment({email,author,content,blogId})
      console.log(response)

      onCommentAdded(response.data);
      setContent('');

    }catch(err)  {
      console.log(err)
    }


  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Add a comment"
        className="p-2 border border-gray-300 rounded-md"
        required
      />
      <button type="submit" className="p-2 bg-blue-500 text-white rounded-md">Submit</button>
    </form>
  );
};

export default CommentForm;
