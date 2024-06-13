// components/CommentList.jsx
import React from 'react';
import Comment from '../Comment/Comment';
const CommentList = ({ comments }) => {
  return (
    <div className='mb-4 rounded shadow-md w-full'>
      <h1 className='text-2xl uppercase text-start 
      mb-6 p-4 
      font-bold'>Comments</h1>
      <div className='flex flex-col justify-center 
                      max-h-[40vh] 
                      overflow-y-scroll
        '>
          {comments.map((com) => (
            <div key={com._id}> 
              <Comment name={com.name} 
                  comment={com.comment}
                  createdAt={com.createdAt}
              />
            </div>

      ))}
    </div> 
    </div>
  );
};

export default CommentList;
