import axios from 'axios'

const apiUrl = import.meta.env.VITE_APP_PROD_API_URL || import.meta.env.VITE_APP_DEV_API_URL
const instance = axios.create({
    baseURL: apiUrl,
});

instance.interceptors.request.use((config) => {
  const token = localStorage.getItem('authToken');
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});
export default instance;