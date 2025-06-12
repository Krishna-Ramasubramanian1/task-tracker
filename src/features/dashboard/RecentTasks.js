import React from 'react';

const RecentTasks = () => {
  const recentTasks = [
    {
      id: 1,
      name: 'Update Dashboard UI',
      status: 'In Progress',
      statusColor: 'green',
      dueDate: 'June 15, 2025',
      priority: 'High',
      priorityColor: 'red',
      assignedTo: 'John Doe'
    },
    {
      id: 2,
      name: 'Fix Navigation Bug',
      status: 'Pending',
      statusColor: 'yellow',
      dueDate: 'June 14, 2025',
      priority: 'Medium',
      priorityColor: 'yellow',
      assignedTo: 'Jane Smith'
    }
  ];

  return (
    <div className="bg-white rounded-xl shadow p-4">
      <p className="text-gray-700 font-semibold text-lg mb-4">Recent Tasks</p>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Task Name
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Due Date
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Priority
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Assigned To
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {recentTasks.map((task) => (
              <tr key={task.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {task.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-${task.statusColor}-100 text-${task.statusColor}-800`}>
                    {task.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {task.dueDate}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-${task.priorityColor}-100 text-${task.priorityColor}-800`}>
                    {task.priority}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {task.assignedTo}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentTasks;