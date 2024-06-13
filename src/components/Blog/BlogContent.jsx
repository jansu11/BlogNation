// BlogContent.jsx
import React from 'react';
import DOMPurify from 'dompurify';
const BlogContent = ({ content }) => {
  return (
    <div className="my-4  blog-content" 
     dangerouslySetInnerHTML={{ __html: content }}
    >

    </div>
  );
};

export default BlogContent;
