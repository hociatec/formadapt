import React from 'react';
    import Navbar from '../components/common/Navbar';

    function HomePage() {
      return (
        <div>
          <Navbar />
          <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Bienvenue sur FormAdapt</h1>
            <p>Ceci est la page d'accueil de l'application FormAdapt.</p>
          </div>
        </div>
      );
    }

    export default HomePage;
