import React from 'react';
    import { Routes, Route } from 'react-router-dom';
    import HomePage from './pages/HomePage';
    import LoginPage from './pages/auth/LoginPage';
    import RegisterPage from './pages/auth/RegisterPage';
    import NotificationCenter from './components/notifications/NotificationCenter';
    import FavoritesList from './components/favorites/FavoritesList';
    import RecommendationsPage from './pages/RecommendationsPage';
    import AuthProvider from './contexts/AuthContext';
    import NotificationProvider from './contexts/NotificationContext';
    import FavoriteProvider from './contexts/FavoriteContext';
    import PrivateRoute from './utils/PrivateRoute';
    import CoursePage from './pages/CoursePage';
    import LearningPathPage from './pages/LearningPathPage';
    import PracticeTestsPage from './pages/PracticeTestsPage';

    function App() {
      return (
        <AuthProvider>
          <NotificationProvider>
            <FavoriteProvider>
              <NotificationCenter />
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/recommendations" element={<PrivateRoute><RecommendationsPage /></PrivateRoute>} />
                <Route path="/favorites" element={<PrivateRoute><FavoritesList /></PrivateRoute>} />
                <Route path="/course/:id" element={<PrivateRoute><CoursePage /></PrivateRoute>} />
                <Route path="/learning-path" element={<PrivateRoute><LearningPathPage /></PrivateRoute>} />
                <Route path="/practice-tests" element={<PrivateRoute><PracticeTestsPage /></PrivateRoute>} />
              </Routes>
            </FavoriteProvider>
          </NotificationProvider>
        </AuthProvider>
      );
    }

    export default App;
