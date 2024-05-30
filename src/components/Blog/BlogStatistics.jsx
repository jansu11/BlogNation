// BlogStatistics.jsx
import React from 'react';
import { FaThumbsUp, FaEye } from 'react-icons/fa';

const BlogStatistics = ({ likes, views }) => {
  return (
    <div className="my-4 flex space-x-4">
      <div className="flex items-center">
        <FaThumbsUp className="text-blue-500 mr-2" />
        <span>{likes} Likes</span>
      </div>
      <div className="flex items-center">
        <FaEye className="text-green-500 mr-2" />
        <span>{views} Views</span>
      </div>
    </div>
  );
};

export default BlogStatistics;
