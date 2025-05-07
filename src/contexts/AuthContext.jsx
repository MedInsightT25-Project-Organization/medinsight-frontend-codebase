import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../services/api';

const AuthContext = createContext();

const authStorage = {
  getItem: (key) => {
    try {
      return localStorage.getItem(key);
    } catch (error) {
      console.error('Auth storage read error:', error);
      return null;
    }
  },
  setItem: (key, value) => {
    try {
      localStorage.setItem(key, value);
    } catch (error) {
      console.error('Auth storage write error:', error);
      throw new Error('Failed to persist authentication');
    }
  },
  clear: () => {
    ['token', 'refreshToken', 'user'].forEach(key => localStorage.removeItem(key));
  }
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within AuthProvider');
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isEmailVerified, setIsEmailVerified] = useState(false);

  const navigate = useNavigate();

  // Initialize auth state
  useEffect(() => {
    const token = authStorage.getItem('token');
    const userData = authStorage.getItem('user');

    if (token && userData) {
      setUser(JSON.parse(userData));
    }
  }, []);

  // Handle auth success
  const handleAuthSuccess = useCallback((data) => {
    const { token, refreshToken, user } = data;
    authStorage.setItem('token', token);
    authStorage.setItem('refreshToken', refreshToken);
    authStorage.setItem('user', JSON.stringify(user));
    setIsEmailVerified(user.isEmailVerified || false);
    setUser(user);
    setError(null);
  }, []);

  // Enhanced logout that coordinates with API.js
  const logout = useCallback(async (error) => {
    try {
      const refreshToken = authStorage.getItem('refreshToken');
      if (refreshToken) {
        await API.post('/auth/logout', { refreshToken });
      }
    } catch (err) {
      console.error('Logout error:', err);
    } finally {
      authStorage.clear();
      setUser(null);
      navigate(error ? '/error' : user?.role === 'practitioner'
        ? '/practitioner-sign-in'
        : '/patient-sign-in');
    }
  }, [user, navigate]);

  // Add global error handler for API.js 401 errors
  useEffect(() => {
    const responseInterceptor = API.interceptors.response.use(
      response => response,
      async error => {
        if (error.response?.status === 401 && error.config._retry) {
          // Refresh token failed - force logout
          await logout(new Error('Session expired'));
        }
        return Promise.reject(error);
      }
    );

    return () => API.interceptors.response.eject(responseInterceptor);
  }, [logout]);

  // Auth methods
  const signup = async (formData, role) => {
    setLoading(true);
    try {
      const endpoint = role === 'patient'
        ? '/auth/register/patient'
        : '/auth/register/practitioner';
      const res = await API.post(endpoint, formData);
      handleAuthSuccess(res.data);
      await API.post('/auth/send-verification-email', { email: res.data.user.email });
      return res.data;
    } catch (error) {
      setError(error.response?.data?.message || 'Registration failed');
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const signin = async (credentials) => {
    setLoading(true);
    try {
      const res = await API.post('/auth/login', credentials);
      handleAuthSuccess(res.data);
      
      return res.data;

    } catch (error) {
      setError(error.response?.data?.message || 'Login failed');
      throw error;
    } finally {
      setLoading(false);
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

  const sendVerificationEmail = async (email) => {
    try {
      await API.post('/auth/send-verification-email', { email });
    } catch (error) {
      console.error('Sending verification email failed:', error.response?.data?.message || error.message);
      throw error;
    }
  };


  const value = {
    sendVerificationEmail,
    forgotPassword,
    user,
    loading,
    error,
    isAuthenticated: !!authStorage.getItem('token'),
    isVerified: user?.emailVerified || false,
    signup,
    signin,
    logout,
    clearError: () => setError(null)
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};