// src/services/authService.js
import auth from './auth';
const getToken = () => {
    return localStorage.getItem('authToken')
}

export const getAuthHeaders = () => {
    const token = getToken();
    if (token){
        return {Authorization: `Bearer ${token}`}

    }
    return {};
}
export const login = async (email, password) => {
  try {
    const response = await auth.post('/login', { email, password });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const signup = async (name, email, password) => {
  try {
    const response = await auth.post('/signup', { name, email, password });
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Add more auth functions as needed
