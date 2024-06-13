import React from 'react'
import { Link } from 'react-router-dom'

const Logo = () => {
  return (
    <Link to={'/'}>
    <div className='flex items-center'>
        <span className='p-1 text-2xl font-bold text-gray-500'>Blog</span>
        <span className='p-1 text-2xl font-bold text-gray-500'>Nation</span>
    </div>

    </Link>
  )
}

export default Logo