

import React, { createContext, useContext, useState, useEffect } from 'react';
import {jwtDecode} from 'jwt-decode'; // Import jwt-decode library

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    const userData = localStorage.getItem('user');
    if (token && userData) {
      try {
        const decodedToken = jwtDecode(token);
        const isTokenExpired = decodedToken.exp < Date.now() / 1000;
        if (isTokenExpired) {
          localStorage.removeItem('token');
          localStorage.removeItem('user');
        } else {
          setIsLoggedIn(true);
          setUser(JSON.parse(userData));
        }
      } catch (error) {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
      }
    }
  }, []);

  const login = (token, userData) => {
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(userData));
    const decodedToken = jwtDecode(token);
    setIsLoggedIn(true);
    setUser(userData);
  };

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setIsLoggedIn(false);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
