// components/LikeButton.jsx
import React, { useState, useEffect, useContext } from 'react';
import { FaThumbsUp } from 'react-icons/fa';
import axios from 'axios';
import { AuthContext } from '../../context/AuthContext';
import BlogStatistics from './BlogStatistics';

const LikeButton = ({ blogId }) => {
  const {auth,like,getLikes,fetchBlogById} = useContext(AuthContext);
  const [liked, setLiked] = useState(false)
  const [likes_count, setLikes] = useState(0)
  const [blog, setBlog] = useState([])
  const [message, setMessage] = useState('')
  const [error,setError] = useState('')

    useEffect(() => {
        const fetchLikes = async () => {
            try{
                const response = await fetchBlogById(blogId)
                setLikes(response.blog.likes_count)
                setBlog(response.blog)
                
            }catch(err){
                console.log(err)
                
            }
        };

        const fetchLikedUser = async() => {
            try{
                const response = await getLikes(blogId) ;
                setLiked(response.data.userLiked)

            }catch(err){
                console.log(err)
            }
        }
        fetchLikes();
        fetchLikedUser()
        
    }, [blogId])
    

  const handleLike = async () => {
    try {
       const response = await like(blogId);
       console.log(response)
        setLiked(response.data.userLiked)
        setLikes(response.data.likes_count)

    } catch (error) {
      console.error('Error liking the blog:', error);
    }
  };

  return (
    <div>
    <BlogStatistics likes={likes_count} views={blog.view_count}/>
    <button
      likes={likes_count}
      onClick={handleLike}
      className={`flex items-center space-x-2 ${liked ? 'text-blue-500' : 'text-gray-500'} hover:text-blue-500 transition duration-300`}
    >
      <FaThumbsUp />
    </button>


    </div>
  );
};

export default LikeButton;
