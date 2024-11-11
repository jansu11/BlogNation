import React, { useContext, useEffect , useState} from 'react'
import {Link, useAsyncError} from 'react-router-dom'
import BlogCard from '../../components/Blog/BlogCard';
import { AuthContext } from '../../context/AuthContext';
import Banner from '../../components/Banner';
import Post from '../../assets/illustrations/Post.svg'
import Illustration from '../../components/LandingPage/Illustration';
import LinkBtn from '../../components/Buttons/LinkBtn';
import typing from '../../assets/images/typing.jpg'
import NotePost from '../../assets/illustrations/NotePost.svg'

function BlogPage() {
    const {fetchBlogs} = useContext(AuthContext)
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
      <>
            <div className=' mt-4 max-h-[60vh] flex pl-16 items-center justify-center'>
              <div className='h-full'>
                <Illustration  svg={NotePost}/>

              </div>
              <div className='mt-10 flex-col justify-center items-center pr-16'>
                <h1 className='font-bold uppercase text-3xl'>
                  Read the latest stories from our writers

                </h1>
                <p className='mt-4'>
                  You can also write your own
                </p>
                <div className='mt-10'>
                  <Link to={`/blogs/create`}>
                    <button className='bg-red-600
                    text-white font-bold text-xl
                    p-3 rounded hover:text-gray-800 transition duration-600'>
                      Write a Blog
                    </button>
                  </Link>

                </div>


              </div>
    
    
    
            </div>
            <div className='solid flex items-center justify-center bg-[#f6f3f3]'>
              
                <div className=" md:max-w-[80vw]  p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                    {blogs.map(blog => (
                      <BlogCard 
                        imgSrc={blog.imageUrl}
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

            </div>

      </>
    )
}

export default BlogPage;