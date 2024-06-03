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
  const {auth,fetchBlogById } = useContext(AuthContext)
  console.log(auth)


  useEffect(() => {

    const getBlog = async() => {
      try{

      const data = await fetchBlogById(id);
      console.log(data.blog)
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
  const isAuthor = auth?.user?.userId == blog.author;
  return (
    <div>
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
      <BlogTitle title={blog.title} author={author.nickName}
      createdAt={blog.createdAt}/>

      <BlogContent content={blog.content}/>
      <LikeButton blogId={id}/>
      <CommentForm auth={auth} blogId={id} onCommentAdded={handleCommentAdded}/>
      <CommentList comments={comments}/>
    </div>
  );
}

export default BlogDetails;
