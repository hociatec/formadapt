import React, { createContext, useState, useEffect } from 'react';

    export const AuthContext = createContext();

    function AuthProvider({ children }) {
      const [user, setUser] = useState(null);
      const [loading, setLoading] = useState(true);

      useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
          setUser(JSON.parse(storedUser));
        }
        setLoading(false);
      }, []);

      const login = async (email, password) => {
        // Simulate API call
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            if (email === 'test@example.com' && password === 'password') {
              const newUser = { id: 1, email: email, token: 'fake-jwt-token' };
              setUser(newUser);
              localStorage.setItem('user', JSON.stringify(newUser));
              resolve(newUser);
            } else {
              reject(new Error('Identifiants invalides'));
            }
          }, 500);
        });
      };

      const register = async (email, password) => {
        // Simulate API call
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            const newUser = { id: 2, email: email, token: 'fake-jwt-token' };
            setUser(newUser);
            localStorage.setItem('user', JSON.stringify(newUser));
            resolve(newUser);
          }, 500);
        });
      };

      const logout = () => {
        setUser(null);
        localStorage.removeItem('user');
      };

      const value = {
        user,
        loading,
        login,
        register,
        logout,
      };

      return (
        <AuthContext.Provider value={value}>
          {!loading && children}
        </AuthContext.Provider>
      );
    }

    export default AuthProvider;
