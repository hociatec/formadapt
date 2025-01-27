import React from 'react';
    import { useParams } from 'react-router-dom';
    import Navbar from '../components/common/Navbar';
    import FavoriteButton from '../components/favorites/FavoriteButton';

    function CoursePage() {
      const { id } = useParams();

      return (
        <div>
          <Navbar />
          <div className="p-4">
            <h2 className="text-xl font-bold mb-4">Détails du cours</h2>
            <p>ID du cours: {id}</p>
            <FavoriteButton courseId={id} />
          </div>
        </div>
      );
    }

    export default CoursePage;
