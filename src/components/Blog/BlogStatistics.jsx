// BlogStatistics.jsx
import React from 'react';
import { FaThumbsUp, FaEye,FaRegCommentAlt} from 'react-icons/fa';

const BlogStatistics = ({ likes, views,comments }) => {
  return (
    <div className="my-2 flex space-x-4 text-sm">
      <div className="flex items-center">
        <FaEye className="text-green-500 mr-2" />
        <span>{views} </span>
      </div>
      <div className="flex items-center">
        <FaRegCommentAlt className="text-green-500 mr-2" />
        <span>{comments} </span>
      </div>
    </div>
  );
};

export default BlogStatistics;
