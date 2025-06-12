import React, { useState } from 'react';
import TopBar from './features/dashboard/topbar';
import Sidebar from './features/dashboard/sidebar';
import DashboardWidgets from './features/dashboard/widgets';
import RecentTasks from './features/dashboard/RecentTasks';
import TaskStats from './features/dashboard/TaskStats';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <TopBar onMenuClick={toggleSidebar} />
      <div className="flex">
        {isSidebarOpen && <Sidebar />}
        <div className="flex-1 p-10">
          <div className="mb-6">
            <h1 className="text-2xl font-semibold text-gray-800">Dashboard</h1>
          </div>
          <div className="bg-white rounded-xl shadow p-4">
            <p className="text-gray-700">Your tasks will show here!</p>
          </div>
          <div className="mt-6 mb-6">
            <DashboardWidgets />
          </div>
          
          <div className="mt-8 grid grid-cols-3 gap-6">
            <div className="col-span-2">
              <RecentTasks />
            </div>
            <div className="col-span-1">
              <TaskStats />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;