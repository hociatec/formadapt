import React from 'react';
    import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

    function LearningPathDashboard() {
      const data = [
        { name: 'Cours 1', progress: 20 },
        { name: 'Cours 2', progress: 50 },
        { name: 'Cours 3', progress: 80 },
        { name: 'Cours 4', progress: 100 },
      ];

      return (
        <div>
          <h3 className="text-lg font-semibold mb-2">Tableau de bord personnalisé</h3>
          <div className="mb-4">
            <h4 className="text-md font-semibold mb-2">Progression par cours</h4>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="progress" stroke="#8884d8" activeDot={{ r: 8 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div>
            <h4 className="text-md font-semibold mb-2">Prochaines étapes</h4>
            <ul className="list-disc list-inside">
              <li>Continuer le cours 2</li>
              <li>Commencer le cours 3</li>
            </ul>
          </div>
        </div>
      );
    }

    export default LearningPathDashboard;
