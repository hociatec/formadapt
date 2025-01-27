import React, { useState, useContext } from 'react';
    import { useNavigate } from 'react-router-dom';
    import { AuthContext } from '../../contexts/AuthContext';

    function RegisterForm() {
      const [email, setEmail] = useState('');
      const [password, setPassword] = useState('');
      const [error, setError] = useState('');
      const { register } = useContext(AuthContext);
      const navigate = useNavigate();

      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          await register(email, password);
          navigate('/recommendations');
        } catch (err) {
          setError(err.message);
        }
      };

      return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {error && <div className="text-red-500">{error}</div>}
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border p-2 rounded"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border p-2 rounded"
            required
          />
          <button type="submit" className="bg-green-500 text-white p-2 rounded hover:bg-green-600">
            Inscription
          </button>
        </form>
      );
    }

    export default RegisterForm;
