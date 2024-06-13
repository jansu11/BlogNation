import React from 'react'
import { Link } from 'react-router-dom'

const LinkBtn = ({url,textContent,color}) => {
  return (
      <Link to={url} >
        <button className=' text-gray-100 p-5 text-xl  hover:text-gray-800 shadow-md transition duration-600 '>
          {textContent}
        </button>
      </Link>
  )
}

export default LinkBtn
