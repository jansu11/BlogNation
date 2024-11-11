import React, { useContext, useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import BlogTitle from '../../components/Blog/BlogTitle';
import BlogContent from '../../components/Blog/BlogContent';
import BlogStatistics from '../../components/Blog/BlogStatistics';
import EditButton from '../../components/Buttons/EditButton';
import DeleteButton from '../../components/Buttons/DeleteButton';
import CommentForm from '../../components/Blog/CommentForm';
import CommentList from '../../components/Blog/CommentList';
import LikeButton from '../../components/Blog/LikeButton';


function BlogDetails() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [author,setAuthor] = useState({})
  const [comments, setComments] = useState([])
  const {auth,fetchBlogById,loading } = useContext(AuthContext)


  useEffect(() => {

    const getBlog = async() => {
      try{

      const data = await fetchBlogById(id);
      setBlog(data.blog)
      setAuthor(data.author)
      setComments(data.comments)

      }catch(error){
        console.error('Error fetching blog:', error);
        setError('Failed to load blog');
      }
    }

    getBlog();

  }, [id]);

  const handleCommentAdded = (comment) => {
    setComments((prevComments) => [...prevComments, comment]);
  };

  if (!blog) return <div>Loading...</div>;
  const isAuthor = auth?.user?.userId?.id == blog.author;
  return (
    <div className=' flex justify-center items-center '>
    <div className=' bg-gray-50 shadow-lg md:max-w-[70vw] m-1 p-6 flex flex-col justify-center items-center'> <BlogTitle snippet={blog.snippet} title={blog.title} author={author.nickName}
      createdAt={blog.createdAt}
      stats=
      {
      <BlogStatistics  views={blog.view_count } comments={comments.length}/>
      
      } likeBtn={ <LikeButton blogId={id}/>}
      />
       
       <div className='md:h-80 overflow-hidden'>
        <img src={blog.imageUrl}/>
       </div>

      <div className=' '>
        <BlogContent content={blog.content}/>

      </div>
      <CommentForm  blogId={id} onCommentAdded={handleCommentAdded}/>
      <CommentList comments={comments}/>

      {isAuthor && (
            <div className="flex space-x-4">
              <Link to={`/blogs/edit/${id}`}>
                <EditButton/>

              </Link>
              <Link to={`/blogs/delete/${id}`}>
                <DeleteButton/>

              </Link>


            </div>
      )}
    </div>

    </div>
  );
}

export default BlogDetails;
