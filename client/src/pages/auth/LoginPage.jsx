import React from 'react';
    import LoginForm from '../../components/auth/LoginForm';
    import Navbar from '../../components/common/Navbar';

    function LoginPage() {
      return (
        <div>
          <Navbar />
          <div className="p-4">
            <h2 className="text-xl font-bold mb-4">Connexion</h2>
            <LoginForm />
          </div>
        </div>
      );
    }

    export default LoginPage;
