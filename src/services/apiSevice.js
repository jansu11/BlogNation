// src/services/apiService.js
import api from './api';

export const fetchBlogs = async () => {
  try {
    const response = await api.get('/blog');
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const createBlog = async (blogData) => {
  try {
    const response = await api.post('/blog', blogData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const fetchBlogById = async (id) => {
  try {
    const response = await api.get(`/blog/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateBlog = async (id, blogData) => {
  try {
    const response = await api.put(`/blog/${id}`, blogData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteBlog = async (id) => {
  try {
    await api.delete(`/blog/${id}`);
  } catch (error) {
    throw error;
  }
};


