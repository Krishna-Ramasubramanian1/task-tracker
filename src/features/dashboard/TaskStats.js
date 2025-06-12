import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const TaskStats = () => {
  const taskData = {
    completed: 12,
    inProgress: 8,
    pending: 6,
  };

  const data = {
    labels: ['Completed', 'In Progress', 'Pending'],
    datasets: [
      {
        data: [taskData.completed, taskData.inProgress, taskData.pending],
        backgroundColor: [
          'rgba(52, 211, 153, 0.8)', // green
          'rgba(59, 130, 246, 0.8)', // blue
          'rgba(251, 191, 36, 0.8)', // yellow
        ],
        borderColor: [
          'rgba(52, 211, 153, 1)',
          'rgba(59, 130, 246, 1)',
          'rgba(251, 191, 36, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false, // Hide the legend
      },
      title: {
        display: true,
        text: 'Task Status Distribution',
        font: {
          size: 16,
        },
      },
    },
  };

  return (
    <div className="bg-white rounded-xl shadow p-4">
      <div className="mb-4">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Task Statistics</h2>
        <div className="grid grid-cols-3 gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-green-500">{taskData.completed}</div>
            <div className="text-sm text-gray-600">Completed</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-500">{taskData.inProgress}</div>
            <div className="text-sm text-gray-600">In Progress</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-yellow-500">{taskData.pending}</div>
            <div className="text-sm text-gray-600">Pending</div>
          </div>
        </div>
      </div>
      <div className="w-full max-w-md">
        <Pie data={data} options={options} />
      </div>
    </div>
  );
};

export default TaskStats;