import axios from 'axios'

const instance = axios.create({
    baseURL: import.meta.env.VITE_APP_DEV_API_URL,
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