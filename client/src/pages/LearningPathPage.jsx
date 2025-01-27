import React, { useState } from 'react';
    import Navbar from '../components/common/Navbar';
    import LearningPathQuiz from '../components/learningPath/LearningPathQuiz';
    import LearningPathDashboard from '../components/learningPath/LearningPathDashboard';

    function LearningPathPage() {
      const [quizCompleted, setQuizCompleted] = useState(false);

      const handleQuizComplete = () => {
        setQuizCompleted(true);
      };

      return (
        <div>
          <Navbar />
          <div className="p-4">
            <h2 className="text-xl font-bold mb-4">Parcours d'apprentissage</h2>
            {quizCompleted ? (
              <LearningPathDashboard />
            ) : (
              <LearningPathQuiz onComplete={handleQuizComplete} />
            )}
          </div>
        </div>
      );
    }

    export default LearningPathPage;
