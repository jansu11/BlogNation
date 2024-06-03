import React, { useContext, useEffect , useState} from 'react'
import {Link, useAsyncError} from 'react-router-dom'
import BlogCard from '../../components/Blog/BlogCard';
import { AuthContext } from '../../context/AuthContext';

function BlogPage() {
    const {fetchBlogs} = useContext(AuthContext)
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {

      const getBlogs = async () => {
        try{
          const data = await fetchBlogs();
          console.log(data)
          setBlogs(data);
          

        } catch(error)
        {
          console.error('Error fetching blogs:',error)
        }

      }
      getBlogs();

    },[])
    return(
      <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {blogs.map(blog => (
        <BlogCard 
          key={blog._id}
          id={blog._id}
          title={blog.title} 
          author={blog.author.nickName} 
          views={blog.view_count} 
          likes={blog.likes_count} 
          snippet={blog.snippet} 
          comments={blog.comments.length}
          createdAt={blog.createdAt}
        />
      ))}
    </div>




        //<div>
      //<h1 className="text-2xl font-bold">Blog Page</h1>
      //<Link to="/blogs/create" className="text-blue-500">Create New Blog</Link>
      //<ul>
        //{blogs.map(blog => (
          //<li key={blog._id}>
            //<Link to={`/blogs/${blog._id}`} className="text-blue-500">
              //{blog.title}
            //</Link>
          //</li>
        //))}
      //</ul>
    //</div>
    )
}

export default BlogPage;