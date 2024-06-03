import React, { createContext, useState, useEffect } from 'react';
import axiosInstance from '../services/auth';
import {jwtDecode} from 'jwt-decode';

// Create the context
export const AuthContext = createContext();

// Create the provider component
export const AuthProvider = ({ children }) => {
  // Define the state to hold authentication data
  const [auth, setAuth] = useState({ token: null, user: null });

  const [loading, setLoading] = useState(true);


    useEffect(() => {
    const initializeAuth = async () => {
      const token = localStorage.getItem('authToken');
      if (token) {
        try {
          const user = jwtDecode(token);
          setAuth({ token, user });
        } catch (error) {
          console.error('Token decoding error', error);
          localStorage.removeItem('authToken');
        }
      }
      setLoading(false);
    };

    initializeAuth();
  }, []);
  
  // Define a function to handle login
  const login = async (email, password) => {
    try{

    const response = await axiosInstance.post('/auth/login', { email, password });
    const { token } = response.data;
    const user = jwtDecode(token);
    localStorage.setItem('authToken', token);
    setAuth({ token, user });
    console.log(user)

    }catch(err){

      console.log("login failed ",err)
      throw error;
    }
  } 

  

  // Define a function to handle signup
  const signup = async (name, email, password) => {
    console.log(name,email,password)
    await axiosInstance.post('/auth/signup', { name , email, password });
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
    console.log(blogData)
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
    console.log(response)
    console.log(auth)
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
    console.log(response)
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
    console.log(response)
    return response
  }catch(err){
    console.log(err)
  }

}
const like = async(id) => {
  console.log(auth)
  try {
    const response = await axiosInstance.post(`/api/blog/likes/${id}`,
    {id},
     {headers: {Authorization: `Bearer ${auth.token}`}}

    )
    console.log(response)
    return response
  }catch(err){
    console.log(err)
  }

}


  // Use useEffect to check for an existing token in localStorage when the component mounts

  return (
    <AuthContext.Provider value=
    {{ loading,auth, login, signup, logout,
      createBlog,fetchBlogById,updateBlog,
      deleteBlog ,fetchBlogs,createComment,
      fetchCommentsById ,like,getLikes

    }}>
      {children}
    </AuthContext.Provider>
  );
};

