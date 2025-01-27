import React, { createContext, useState, useEffect } from 'react';

    export const FavoriteContext = createContext();

    function FavoriteProvider({ children }) {
      const [favorites, setFavorites] = useState([]);

      useEffect(() => {
        const storedFavorites = localStorage.getItem('favorites');
        if (storedFavorites) {
          setFavorites(JSON.parse(storedFavorites));
        }
      }, []);

      useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(favorites));
      }, [favorites]);

      const toggleFavorite = (courseId) => {
        if (favorites.includes(courseId)) {
          setFavorites(favorites.filter((id) => id !== courseId));
        } else {
          setFavorites([...favorites, courseId]);
        }
      };

      const value = {
        favorites,
        toggleFavorite,
      };

      return (
        <FavoriteContext.Provider value={value}>
          {children}
        </FavoriteContext.Provider>
      );
    }

    export default FavoriteProvider;
