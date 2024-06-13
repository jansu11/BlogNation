import React from 'react';

const Banner = ({ backgroundImage, title, subtitle , Illus, btn}) => {
  return (
    <div
      className=" bg-[#ff6b6b] h-max  w-full  p-12 bg-cover bg-center flex  flex-wrap items-center  pr-2"
    >
        {Illus}
        <div className="h-max flex-1 p-5 text-black font-bold ">
            <h1 className=" text-3xl p-5 font-bold  text-center">{title}</h1>
            <p className="text-xl font-bold text-gray-900 lg:text-xl pb-5 lowercase">{subtitle}</p>
            {btn &&  
                <div> 
                     {btn}

                </div>
            }
        </div>

    </div>
  );
};

export default Banner;
