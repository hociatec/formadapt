import React, { useState } from 'react';

    function LearningPathQuiz({ onComplete }) {
      const [selectedSoftware, setSelectedSoftware] = useState('');
      const [level, setLevel] = useState('');
      const [goals, setGoals] = useState('');

      const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate API call to save quiz data
        console.log('Quiz data:', { selectedSoftware, level, goals });
        onComplete();
      };

      return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <h3 className="text-lg font-semibold mb-2">Quiz d'évaluation initial</h3>
          <label className="flex flex-col">
            Logiciel à apprendre:
            <select value={selectedSoftware} onChange={(e) => setSelectedSoftware(e.target.value)} className="border p-2 rounded">
              <option value="">Sélectionner un logiciel</option>
              <option value="software1">Logiciel 1</option>
              <option value="software2">Logiciel 2</option>
              <option value="software3">Logiciel 3</option>
            </select>
          </label>
          <label className="flex flex-col">
            Votre niveau:
            <select value={level} onChange={(e) => setLevel(e.target.value)} className="border p-2 rounded">
              <option value="">Sélectionner un niveau</option>
              <option value="beginner">Débutant</option>
              <option value="intermediate">Intermédiaire</option>
              <option value="advanced">Avancé</option>
            </select>
          </label>
          <label className="flex flex-col">
            Objectifs d'apprentissage:
            <textarea value={goals} onChange={(e) => setGoals(e.target.value)} className="border p-2 rounded" />
          </label>
          <button type="submit" className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
            Soumettre
          </button>
        </form>
      );
    }

    export default LearningPathQuiz;
