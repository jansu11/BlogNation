import React from 'react';
import { Link } from 'react-router-dom';
import { formatDistanceToNow } from 'date-fns';
import BlogStatistics from './BlogStatistics';
import LinkBtn from '../Buttons/LinkBtn';

const BlogCard = ({ id, title, author, views, likes, comments, snippet,createdAt,imgSrc }) => {
  return (
    <div className=" max-w-full bg-white shadow-lg rounded-md overflow-hidden ">
      <div>
      </div>
      <div className=' p-2 object-cover shadow-md w-full h-60'>
        <img src={imgSrc} className='w-full h-full object-cover rounded-md shadow-sm'/>
      </div>
      <div className=" p-4 flex-grow flex  flex-col justify-between ">
          <div>
            <Link to={`/blogs/${id}`}>
              <h1 className=' font-bold text-3xl hover:text-[#F50057]'>
                {title}

              </h1>
            </Link>

            <p className=" text-left text-gray-600  text-sm mt-1"> {author}</p>
            <p className="text-left text-gray-600 text-sm mt-1"> 

            {formatDistanceToNow(new Date(createdAt), { addSuffix: true })}
            </p>
          </div>
          <BlogStatistics views={views} likes={likes} comments={comments}/>

          <div className='h-20 overflow-hidden'>
            <p className="text-gray-900 text-left font-bold" dangerouslySetInnerHTML={{__html:snippet}}></p>

          </div>
      </div>
            <Link to={`/blogs/${id}`}>
              <button className='
              text-xl font-bold bg-gray-300
              shadow-md p-5 m-4 hover:bg-black hover:text-white
              rounded-xl transition duration-300
               '>
                Contine Reading
              </button>
            </Link>
    </div>
  );
};

export default BlogCard;
