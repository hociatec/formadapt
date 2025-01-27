import React, { useContext } from 'react';
    import { Link, useNavigate } from 'react-router-dom';
    import { AuthContext } from '../../contexts/AuthContext';

    function Navbar() {
      const { user, logout } = useContext(AuthContext);
      const navigate = useNavigate();

      const handleLogout = () => {
        logout();
        navigate('/login');
      };

      return (
        <nav className="bg-gray-800 p-4 text-white flex justify-between items-center">
          <Link to="/" className="text-xl font-bold">FormAdapt</Link>
          <ul className="flex gap-4">
            <li><Link to="/" className="hover:text-gray-300">Accueil</Link></li>
            {user ? (
              <>
                <li><Link to="/recommendations" className="hover:text-gray-300">Recommandations</Link></li>
                <li><Link to="/favorites" className="hover:text-gray-300">Favoris</Link></li>
                <li><Link to="/learning-path" className="hover:text-gray-300">Parcours</Link></li>
                <li><Link to="/practice-tests" className="hover:text-gray-300">Tests</Link></li>
                <li><button onClick={handleLogout} className="hover:text-gray-300">Déconnexion</button></li>
              </>
            ) : (
              <>
                <li><Link to="/login" className="hover:text-gray-300">Connexion</Link></li>
                <li><Link to="/register" className="hover:text-gray-300">Inscription</Link></li>
              </>
            )}
          </ul>
        </nav>
      );
    }

    export default Navbar;
