// components/Comment.jsx
import React from 'react';
import { formatDistanceToNow } from 'date-fns';

const Comment = ({ _id, name, comment, createdAt}) => {

  return (
    <div  className="p-4  border flex flex-col rounded-lg mb-4 shadow-sm">
      <div className="flex  justify-between items-center mb-2">
        <span className="font-bold text-lg uppercase">{name}</span>
        <span className="text-gray-500 text-sm">
          {formatDistanceToNow(new Date(createdAt), { addSuffix: true })}
        </span>
      </div>
      <p className="text-gray-800 text-start text-xl">{comment}</p>
    </div>
  );
};

export default Comment;
