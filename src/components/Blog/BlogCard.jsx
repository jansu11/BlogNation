import React from 'react';
import { Link } from 'react-router-dom';
import { formatDistanceToNow } from 'date-fns';

const BlogCard = ({ id, title, author, views, likes, comments, snippet,createdAt }) => {
  return (
    <div className="max-w-md mx-auto bg-white shadow-md rounded-md overflow-hidden md:max-w-2xl">
      <div className="md:flex">
        <div className="p-4">
          <Link to={`/blogs/${id}`} className="text-xl font-bold text-gray-900 hover:underline">
            {title}
          </Link>
          <p className="text-gray-600 text-sm mt-1">Created by: {author}</p>
          <p className="text-gray-600 text-sm mt-1"> 

          {formatDistanceToNow(new Date(createdAt), { addSuffix: true })}
          </p>

          <p className="text-gray-700 mt-4">{snippet}</p>
          <div className="mt-4 flex items-center justify-between text-gray-600 text-sm">
            <span>Views: {views}</span>
            <span>Likes: {likes}</span>
            <span>Comments: {comments}</span>
          </div>
          <Link to={`/blogs/${id}`} className="text-blue-500 hover:underline mt-4 inline-block">
            Read more
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
