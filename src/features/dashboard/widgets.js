import React from 'react';

const DashboardWidget = ({ icon, count, label, bgColor, iconColor }) => {
  return (
    <div className="bg-white p-4 rounded-xl shadow">
      <div className="flex items-center">
        <div className={`p-2 ${bgColor} rounded-full`}>
          <svg className={`w-6 h-6 ${iconColor}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {icon}
          </svg>
        </div>
        <div className="ml-4">
          <h3 className="text-3xl font-bold">{count}</h3>
          <p className="text-gray-500 text-sm">{label}</p>
        </div>
      </div>
    </div>
  );
};

const DashboardWidgets = () => {
  const widgets = [
    {
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />,
      count: 8,
      label: 'All Tasks',
      bgColor: 'bg-blue-100',
      iconColor: 'text-blue-500'
    },
    {
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />,
      count: 6,
      label: 'Incomplete',
      bgColor: 'bg-green-100',
      iconColor: 'text-green-500'
    },
    {
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />,
      count: 2,
      label: 'Overdue',
      bgColor: 'bg-red-100',
      iconColor: 'text-red-500'
    },
    {
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />,
      count: 2,
      label: 'Due Today',
      bgColor: 'bg-orange-100',
      iconColor: 'text-orange-500'
    }
  ];

  return (
    <div className="grid grid-cols-4 gap-4">
      {widgets.map((widget, index) => (
        <DashboardWidget key={index} {...widget} />
      ))}
    </div>
  );
};

export default DashboardWidgets;