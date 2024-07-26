import React, { useState } from 'react';
import CompletedTasks from './CompletedTasks';
import { Page } from 'konsta/react';

const Tasks = () => {
  const [activeTab, setActiveTab] = useState('newTasks');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <section className="w-full bg-gray-900 rounded-lg overflow-hidden shadow-lg">
      <div className="flex justify-between px-4 py-3 bg-gray-800">
        <button
          className={`text-lg font-medium px-4 py-2 rounded-t-lg focus:outline-none transition-colors duration-300 ${
            activeTab === 'newTasks'
              ? 'text-blue-500 border-b-2 border-blue-500'
              : 'text-gray-400 hover:text-blue-500'
          }`}
          onClick={() => handleTabChange('newTasks')}
        >
          New Tasks
        </button>
        <button
          className={`text-lg font-medium px-4 py-2 rounded-t-lg focus:outline-none transition-colors duration-300 ${
            activeTab === 'completedTasks'
              ? 'text-green-500 border-b-2 border-green-500'
              : 'text-gray-400 hover:text-green-500'
          }`}
          onClick={() => handleTabChange('completedTasks')}
        >
          Completed Tasks
        </button>
      </div>
      <div className="p-6">
        {activeTab === 'completedTasks' ? (
          <CompletedTasks />
        ) : (
          'New tasks content goes here'
        )}
      </div>
    </section>
  );
};

export default Tasks;
