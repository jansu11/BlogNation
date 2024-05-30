// BlogTitle.jsx
import React from 'react';
import { format } from 'date-fns';

const BlogTitle = ({ title, author, createdAt }) => {
  return (
    <div className="mb-4">
      <h1 className="text-3xl font-bold">{title}</h1>
      <p className="text-sm text-gray-600">By {author} | {format(new Date(createdAt), 'PPP')}</p>
    </div>
  );
};

export default BlogTitle;
