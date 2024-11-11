import React, { createContext, useState, useEffect } from 'react';
import axiosInstance from '../services/auth';
import {jwtDecode} from 'jwt-decode';
import { useNavigate} from 'react-router-dom';
import axios from 'axios'
// Create the context
export const AuthContext = createContext();

// Create the provider component
export const AuthProvider = ({ children }) => {
  // Define the state to hold authentication data
  const [auth, setAuth] = useState({ token: null, user: null });
  const [sessionExpired, setSessionExpired] = useState(false);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate()

  
  // Define a function to handle login


  const login = async (email, password) => {
    try{

    const response = await axiosInstance.post('/auth/login', { email, password,'role':'author'});
    const token = response.data.accessToken;
    const user = jwtDecode(token);
    localStorage.setItem('authToken', token);
    setAuth({token, user });

    }catch(err){

      console.log("login failed ",err)
      throw error;
    }
  } 

  
const refresh = async () => {
  const response = await axiosInstance.post(`/auth/refresh`, {}, { withCredentials: true });
  if (response.data.accessToken) {
    localStorage.setItem('accessToken', response.data.accessToken);
  }
  return response.data;
};


  // Define a function to handle signup
  const signup = async (name, email, password) => {
    await axiosInstance.post('/auth/signup', { name , email, password,'role':'author'});
    await login(email, password); // Automatically login after signup
  };

  // Define a function to handle logout
  const logout = () => {
    setAuth({ token: null, user: null });
    localStorage.removeItem('authToken');
  };




const fetchBlogs = async () => {
  try {
    const response = await axiosInstance.get('/api/blog');
    return response.data;
  } catch (error) {
    throw error;
  }
};

const createBlog = async (blogData) => {
  try {
    const response = await axiosInstance.post('/api/blog', blogData
    ,{
        headers: {Authorization : `Bearer ${auth.token}`} 
    }
  );
    return response.data;
  } catch (error) {
    throw error;
  }
};

const fetchBlogById = async (id) => {
  try {
    const response = await axiosInstance.get(`/api/blog/${id}`,

    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

const updateBlog = async (id, blogData) => {
  try {
    const response = await axiosInstance.put(`/api/blog/${id}`, blogData

    ,{
        headers: {Authorization : `Bearer ${auth.token}`} 
    }
  );
    return response.data;
  } catch (error) {
    throw error;
  }
};

const deleteBlog = async (id) => {
  try {
    await axiosInstance.delete(`/api/blog/${id}`
    ,{
        headers: {Authorization : `Bearer ${auth.token}`} 
    }
  );
  } catch (error) {
    throw error;
  }
};

const createComment = async(commentData) => {
  try{

    const email = commentData.email;
    const name = commentData.author;
    const comment = commentData.content;
    const blogId = commentData.blogId; 

    const response = await axiosInstance.post(`/api/comment/`,
    {email,name,comment,blogId},
    {
      headers:{Authorization : `Bearer ${auth.token}`}
    }
    )

    return response.data;


  }catch (error){
    throw error;

  }
  
}

const fetchCommentsById = async (id) => 
  {
    try {
    const response = await axiosInstance.get(`/api/comment/${id}`,

    );
    return response.data;
  } catch (error) {
    throw error;
  }
  }

const getLikes = async(id) => {
  try {
    const response = await axiosInstance.get(`/api/blog/likes/${id}`,
     {headers: {Authorization: `Bearer ${auth.token}`}}
    )
    return response
  }catch(err){
  }

}
const like = async(id) => {
  try {
    const response = await axiosInstance.post(`/api/blog/likes/${id}`,
    {id},
     {headers: {Authorization: `Bearer ${auth.token}`}}

    )
    return response
  }catch(err){
  }

}
const createAuthorProfile = async(profile) => {
  try {
    const response = await axiosInstance.post(`/api/author/`,
    profile,
     {headers: {Authorization: `Bearer ${auth.token}`}}

    )
    return response
  }catch(err){
  }

}
    useEffect(() => {
    const initializeAuth = async () => {
      const token = localStorage.getItem('authToken');
      if (token) {
        try {
          const user = jwtDecode(token);
          setAuth({ token, user });
        } catch (error) {
          localStorage.removeItem('authToken');
        }
      }
      setLoading(false);

    };

    initializeAuth();
    
  }, []);


if(loading)
  {
    return <div>Loading ... </div>
  }
  // Use useEffect to check for an existing token in localStorage when the component mounts

  return (
    <AuthContext.Provider value=
    {{ loading,auth, login, signup, logout,
      createBlog,fetchBlogById,updateBlog,
      deleteBlog ,fetchBlogs,createComment,
      fetchCommentsById ,like,getLikes,
      createAuthorProfile,refresh

    }}>
      {children}
    </AuthContext.Provider>
  );
};

