import React, { useContext } from 'react';
    import { FavoriteContext } from '../../contexts/FavoriteContext';

    function FavoritesList() {
      const { favorites } = useContext(FavoriteContext);

      return (
        <div>
          <h2>Vos cours favoris</h2>
          {favorites.length === 0 ? (
            <p>Aucun cours favori pour le moment.</p>
          ) : (
            <ul>
              {favorites.map((courseId) => (
                <li key={courseId}>ID du cours: {courseId}</li>
              ))}
            </ul>
          )}
        </div>
      );
    }

    export default FavoritesList;
