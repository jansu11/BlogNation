import React, { useContext, useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import BlogTitle from '../../components/Blog/BlogTitle';
import BlogContent from '../../components/Blog/BlogContent';
import BlogStatistics from '../../components/Blog/BlogStatistics';

function BlogDetails() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const {fetchBlogById} = useContext(AuthContext)
  useEffect(() => {

    const getBlog = async() => {
      try{

      const data = await fetchBlogById(id);
      console.log(data.blog)
      setBlog(data.blog)

      }catch(error){
        console.error('Error fetching blog:', error);
        setError('Failed to load blog');
      }
    }

    getBlog();

  }, [id]);

  if (!blog) return <div>Loading...</div>;

  return (
    <div>
      <BlogTitle title={blog.title} author={blog.author}
      createdAt={blog.createdAt}/>

      <BlogContent content={blog.content}/>
      <BlogStatistics likes={blog.likes_count} views={blog.view_count} />





    <Link to={`/blogs/edit/${id}`} className="text-blue-500"><button
     className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 "
    >Edit Blog</button> </Link>


    <Link to={`/blogs/delete/${id}`} className="text-red-500"><button
     className="px-4 py-2 bg-red-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 "
    >Delete Blog</button> </Link>
    </div>
  );
}

export default BlogDetails;
