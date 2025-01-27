import React, { useContext } from 'react';
    import { FavoriteContext } from '../../contexts/FavoriteContext';
    import { motion } from 'framer-motion';

    function FavoriteButton({ courseId }) {
      const { favorites, toggleFavorite } = useContext(FavoriteContext);
      const isFavorite = favorites.includes(courseId);

      return (
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() => toggleFavorite(courseId)}
          className={`p-2 rounded ${isFavorite ? 'bg-red-500 text-white' : 'bg-gray-200 text-gray-700'}`}
        >
          {isFavorite ? 'Retirer des favoris' : 'Ajouter aux favoris'}
        </motion.button>
      );
    }

    export default FavoriteButton;
