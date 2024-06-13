// BlogTitle.jsx
import React from 'react';
import { format } from 'date-fns';
import BlogContentBanner from './BlogContentBanner'; 
import BlogContentIllustration from '../LandingPage/BlogContentIllustration';
import wave from '../../assets/illustrations/wave.svg'
const BlogTitle = ({ stats,snippet,title, author, createdAt,likeBtn }) => {
  return (
    <div className="mb-4 ">
      <h1 className='text-6xl font-bold text-start'>
        {title}
      </h1>
      <p className='text-start leading-loose text-xl mt-2'>
         <div dangerouslySetInnerHTML={{__html:snippet}}/>
      </p>
      <div className='flex items-center justify-around'>
        <div>
          <div className='flex flex-col text-sm mt-2 text-start'>
            <div>
                <span className='font-bold text-red-400'>
                  writtenBy : {author} 
                </span>
            </div>
            <div>
              <span className='font-bold text-red-400'>
                LastUpdate : {format(new Date(createdAt), 'PPP')}

              </span>

            </div>
            {stats}
          </div>

        </div>

        <div className=' flex-1 ml-8 border-l-2 border-red-500 text-4xl pl-4'>
          {likeBtn}
        </div>
      </div>
    </div>
  );
};

export default BlogTitle;
