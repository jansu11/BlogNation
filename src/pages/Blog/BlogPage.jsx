import axios from '../../api/axios';
import React, { useEffect , useState} from 'react'
import {Link} from 'react-router-dom'

function BlogPage() {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        axios.get('/blogs')
        .then(response => setBlogs(response.data))
        .catch(error => console.error('Error fetching blogs',error))
    },[])
    return(
        <div>
      <h1 className="text-2xl font-bold">Blog Page</h1>
      <Link to="/blogs/create" className="text-blue-500">Create New Blog</Link>
      <ul>
        {blogs.map(blog => (
          <li key={blog.id}>
            <Link to={`/blogs/${blog.id}`} className="text-blue-500">
              {blog.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
    )
}

export default BlogPage;