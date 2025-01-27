import React from 'react';
    import Navbar from '../components/common/Navbar';

    function RecommendationsPage() {
      return (
        <div>
          <Navbar />
          <div className="p-4">
            <h2 className="text-xl font-bold mb-4">Recommandations</h2>
            <p>Voici vos recommandations de cours personnalisées.</p>
          </div>
        </div>
      );
    }

    export default RecommendationsPage;
