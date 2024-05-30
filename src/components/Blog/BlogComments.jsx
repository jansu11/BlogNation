// BlogComments.jsx
import React from 'react';
import { FaComment } from 'react-icons/fa';

const BlogComments = ({ comments }) => {
  return (
    <div className="my-4">
      <h2 className="text-2xl font-bold mb-4">Comments</h2>
      {comments.length > 0 ? (
        comments.map((comment, index) => (
          <div key={index} className="border p-4 mb-2 rounded-md">
            <p className="text-sm text-gray-600">{comment.author}:</p>
            <p>{comment.content}</p>
          </div>
        ))
      ) : (
        <p>No comments yet.</p>
      )}
    </div>
  );
};

export default BlogComments;
