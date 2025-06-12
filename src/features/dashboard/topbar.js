import React from 'react';
import GuestUser from '../../images/Guest-user.png';

const TopBar = ({ onMenuClick }) => {
  return (
    <div className="bg-blue-500 p-4 flex items-center justify-between">
      <div className="flex items-center space-x-2">
        <button 
          className="text-white p-2 hover:bg-blue-600 rounded-lg transition-colors"
          onClick={onMenuClick}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <div className="flex items-center">
          <div className="w-8 h-8 bg-white rounded-full"></div>
          <span className="text-white text-xl ml-2">Krunal Task Tracker</span>
        </div>
      </div>
      
      <div className="flex items-center space-x-4">
        <button className="bg-cyan-400 text-white px-4 py-2 rounded-md hover:bg-cyan-500">
          Create new Task
        </button>
        <div className="flex items-center text-white">
          <span>Hello, User</span>
          <img 
            src={GuestUser} 
            alt="User Avatar" 
            className="w-8 h-8 rounded-full ml-2 object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default TopBar;