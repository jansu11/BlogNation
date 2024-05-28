import React, { createContext, useState, useEffect } from 'react';
import axiosInstance from '../services/auth';
import {jwtDecode} from 'jwt-decode';

// Create the context
export const AuthContext = createContext();

// Create the provider component
export const AuthProvider = ({ children }) => {
  // Define the state to hold authentication data
  const [auth, setAuth] = useState({ token: null, user: null });
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  // Define a function to handle login
  const login = async (email, password) => {
    const response = await axiosInstance.post('/login', { email, password });
    const { token } = response.data;
    const user = jwtDecode(token);
    console.log(token,user)
    setAuth({ token, user });
    localStorage.setItem('authToken', token);
    setIsAuthenticated(true);
  };

  // Define a function to handle signup
  const signup = async (name, email, password) => {
    console.log(name,email,password)
    await axiosInstance.post('/signup', { name , email, password });
    await login(email, password); // Automatically login after signup
  };

  // Define a function to handle logout
  const logout = () => {
    setAuth({ token: null, user: null });
    localStorage.removeItem('authToken');
    setIsAuthenticated(false);
  };

  // Use useEffect to check for an existing token in localStorage when the component mounts
  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (token) {
      const user = jwtDecode(token);
      setAuth({ token, user });
    }
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated,auth, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

