// BlogContent.jsx
import React from 'react';

const BlogContent = ({ content }) => {
  return (
    <div className="my-4">
      <p className="text-lg">{content}</p>
    </div>
  );
};

export default BlogContent;
