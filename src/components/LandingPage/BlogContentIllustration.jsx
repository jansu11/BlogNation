import React from 'react';

const BlogContentIllustration = ({ svg ,title, author, date}) => {
 
    return (
    <div className="relative w-full h-60 overflow-hidden">
      {/* SVG as background */}
      <img
        src={svg}
        alt="Banner Wave"
        className="absolute bottom-0 left-0 w-full h-full object-cover"
      />
      {/* Text content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
        <h1 className="text-4xl font-bold mb-2">{title}</h1>
        <p className="text-lg">{author}</p>
        <p className="text-sm">{date}</p>
      </div>
      {/* Overlay for better text readability */}
    </div>
  );
};

export default BlogContentIllustration;
