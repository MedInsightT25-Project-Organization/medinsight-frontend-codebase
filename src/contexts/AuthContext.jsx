// src/context/AuthContext.jsx
import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../services/api'; // ✅ Use API instance, not axios

const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem('accessToken')); // ✅ match api.js
  const [refreshToken, setRefreshToken] = useState(localStorage.getItem('refreshToken'));
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      const userData = JSON.parse(localStorage.getItem('user'));
      setUser(userData);
    }
  }, [token]);

  const signup = async (formData, role) => {
    try {
      const url = role === 'patient'
        ? '/auth/register/patient'
        : '/auth/register/practitioner';
      const res = await API.post(url, formData); // ✅ Use API instead of axios
      handleAuthSuccess(res.data);

      await sendVerificationEmail(res.data.user.email)
    } catch (error) {
      console.error('Signup failed:', error.response?.data?.message || error.message);
      throw error;
    }
  };

  // Send Verification Email
  const sendVerificationEmail = async (email) => {
    try {
      await API.post('/auth/send-verification-email', { email });
    } catch (error) {
      console.error('Sending verification email failed:', error.response?.data?.message || error.message);
      throw error;
    }
  };


  const signin = async (formData) => {
    try {
      const res = await API.post('/auth/login', formData); // ✅ Common login endpoint
      handleAuthSuccess(res.data);

      // Redirect based on role
      // if (res.data.user.role === 'patient') {
      //   navigate('/patient-dashboard');
      // } else if (res.data.user.role === 'provider') {
      //   navigate('/provider/dashboard');
      // } else {
      //   navigate('/');
      // }
    } catch (error) {
      console.error('Signin failed:', error.response?.data?.message || error.message);
      throw error;
    }
  };

  const forgotPassword = async (email) => {
    try {
      await API.post('/auth/forgot-password', { email });
    } catch (error) {
      console.error('Forgot password failed:', error.response?.data?.message || error.message);
      throw error;
    }
  };


  // const logout = () => {
  //   setUser(null);
  //   setToken(null);
  //   setRefreshToken(null);
  //   localStorage.removeItem('accessToken');  
  //   localStorage.removeItem('refreshToken');
  //   localStorage.removeItem('user');
  //   navigate('/');
  // };

  const logout = async () => {
    try {
      if (refreshToken) {
        await API.post('/auth/logout', { refreshToken }, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
      }
    } catch (error) {
      console.error('Logout failed:', error.response?.data?.message || error.message);
      // You might want to still proceed to clear the state
    } finally {
      // Always clear frontend state
      setUser(null);
      setToken(null);
      setRefreshToken(null);
      localStorage.removeItem('accessToken');
      localStorage.removeItem('refreshToken');
      localStorage.removeItem('user');
      navigate('/patient-sign-in');
    }
  };


  const handleAuthSuccess = (data) => {
    const { token, refreshToken, user } = data;
    setToken(token);
    setRefreshToken(refreshToken);
    setUser(user);
    localStorage.setItem('accessToken', token); // ✅ correct key
    localStorage.setItem('refreshToken', refreshToken);
    localStorage.setItem('user', JSON.stringify(user));
  };

  const value = {
    user,
    token,
    refreshToken,
    signup,
    signin,
    forgotPassword,
    sendVerificationEmail,
    logout,
    isAuthenticated: !!token,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
