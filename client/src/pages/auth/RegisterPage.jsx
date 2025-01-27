import React from 'react';
    import RegisterForm from '../../components/auth/RegisterForm';
    import Navbar from '../../components/common/Navbar';

    function RegisterPage() {
      return (
        <div>
          <Navbar />
          <div className="p-4">
            <h2 className="text-xl font-bold mb-4">Inscription</h2>
            <RegisterForm />
          </div>
        </div>
      );
    }

    export default RegisterPage;
