import React, { useState, useEffect, useContext } from 'react';
import { FaThumbsUp } from 'react-icons/fa';
import { AuthContext } from '../../context/AuthContext';

const LikeButton = ({ blogId }) => {
  const { like, getLikes, fetchBlogById } = useContext(AuthContext);
  const [liked, setLiked] = useState(false);
  const [likes_count, setLikes] = useState(0);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchLikes = async () => {
      try {
        const response = await fetchBlogById(blogId);
        setLikes(response.blog.likes_count);
      } catch (err) {
        console.log(err);
      }
    };

    const fetchLikedUser = async () => {
      try {
        const response = await getLikes(blogId);
        setLiked(response.data.userLiked);
      } catch (err) {
        console.log(err);
      }
    };

    fetchLikes();
    fetchLikedUser();
  }, [blogId]);

  const handleLike = async () => {
    try {
      const response = await like(blogId);
      setLiked(response.data.userLiked);
      setLikes(response.data.likes_count);
      liked ? setMessage('You UnLiked the Post') : setMessage('You Liked the Post');
      setError('');
    } catch (err) {
      console.error('Error liking the blog:', err);
      setError('Please Login to Like');
      setMessage('');
    }
  };

  return (
    <div>
      <button
        onClick={handleLike}
        className={`flex items-center space-x-2 ${liked ? 'text-blue-500' : 'text-gray-500'} hover:text-blue-500 transition duration-300`}
      >
        <FaThumbsUp />
        <span className='text-xl'>{likes_count}</span>
      </button>
      <div>
        {error && <p className="text-red-500 text-sm">{error}</p>}
        {message && <p className="text-green-500 text-sm">{message} </p>}
        


      </div>
    </div>
  );
};

export default LikeButton;
