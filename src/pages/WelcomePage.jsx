import React from 'react'
import { Link } from 'react-router-dom'

function WelcomePage() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
      <h1 className="text-4xl font-bold mb-8">Welcome to the Blog Platform</h1>
      <div className="flex space-x-4">
        <Link to="/author/" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300">
          Sign Up as Author
        </Link>
        <Link to="/blogs" className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition duration-300">
          View All Blogs
        </Link>
      </div>
    </div>
  )
}

export default WelcomePage