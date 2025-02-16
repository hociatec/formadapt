import React, { useContext } from 'react';
    import { Navigate } from 'react-router-dom';
    import { AuthContext } from '../contexts/AuthContext';

    function PrivateRoute({ children }) {
      const { user, loading } = useContext(AuthContext);

      if (loading) {
        return <div>Chargement...</div>;
      }

      if (!user) {
        return <Navigate to="/login" />;
      }

      return children;
    }

    export default PrivateRoute;
