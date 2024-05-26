import React, { useEffect , useState} from 'react'
import {Link} from 'react-router-dom'
import {fetchBlogs}  from '../../services/apiSevice'

function BlogPage() {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {

      const getBlogs = async () => {
        try{
          const data = await fetchBlogs();
          setBlogs(data);

        } catch(error)
        {
          console.error('Error fetching blogs:',error)
        }

      }
      getBlogs();

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