// src/components/AuthorLandingPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import Illustration from '../../components/LandingPage/Illustration';
import Summer from '../../assets/illustrations/Summer.svg'
const AuthorLandingPage = () => {
  return (
      <div className=" relative flex h-full flex-col justify-center items-center bg-gray-200">
        <div className='absolute -left-[28%]
        top-[40%] md:-left-[8%]
        
        '>
          <Illustration  svg={Summer}/>
        </div>
        <div className='  flex-1 z-10 mt-5 mb-0 capitalize p-5 md:mt-14 md:flex-col justify-center items-center '>
          <h1 className="pt-8 text-4xl text-center pl-2 font-bold mb-3">
              Join , Write and share your stories 
          </h1>
          <p className="mb-6 pl-8 text-lg font-bold">
              connect with readers
          </p>

          <div className="z-10 pl-14 space-x-4 text-2xl
          font-bold
          ">
            <Link to="/author/signup" >
              <button className="bg-[#E4EA8C] text-gray-500 p-5 shadow-lg rounded hover:bg-yellow-600 transition duration-300">
                Sign Up
              </button>
            </Link>
          </div>
        </div>
        <div className='pb-10 md:mb-16 md:pb-16 md:flex-col items-center justify-center'>
          <h1 className='mt-2 md:pl-16 font-bold text-xl'>
            Already have an account?  
          </h1>
          <div className='mt-1 pt-2 md:pl-16'>
            <Link to="/author/login" className="bg-[#FD6982] shadow-lg text-white p-4 rounded hover:bg-yellow-600 transition duration-300">
               <button className='mt-2'>
                Login
              </button>
            </Link>

          </div>

        </div>
      </div>

  );
};

export default AuthorLandingPage;
