import React, { useState, useContext } from 'react';
    import { useNavigate } from 'react-router-dom';
    import { AuthContext } from '../../contexts/AuthContext';

    function LoginForm() {
      const [email, setEmail] = useState('');
      const [password, setPassword] = useState('');
      const [error, setError] = useState('');
      const { login } = useContext(AuthContext);
      const navigate = useNavigate();

      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          await login(email, password);
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
          <button type="submit" className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
            Connexion
          </button>
        </form>
      );
    }

    export default LoginForm;
