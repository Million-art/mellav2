import React, { useState } from 'react'
import { App, Block, Button, Navbar } from 'konsta/react';
import Tasks from "./components/frontend/Tasks";
import Withdrawal from "./components/frontend/Withdrawal";
import Meme from "./components/frontend/Meme";
import { FaUserCircle } from 'react-icons/fa';

const UserDashboard = ({ user }) => {
  const [activeView, setActiveView] = useState('meme');
 

  const handleViewChange = (view) => {
    setActiveView(view);
  };

  const renderView = () => {
    switch (activeView) {
      case 'meme':
        return <Meme />;
      case 'tasks':
        return <Tasks />;
      case 'withdrawal':
        return <Withdrawal />;
      default:
        return null;
    }
  };

  return (
    <App safeAreas className="w-full bg-slate-900 text-white h-screen">
      <Navbar className='px-5'>
        <div className='flex flex-row w-full'>
          <span className='w-1/2 flex flex-row gap-2 items-center'>
            <FaUserCircle size={32} />
            {user[0].userName}
          </span>
          <span className='w-1/2 flex justify-end items-center'>
            Balance: {user[0].balance}
          </span>
        </div>
      </Navbar>
      <Block className="mb-6">{renderView()}</Block>
      <Block className="space-x-4 absolute bottom-1 w-full flex justify-center">
        <Button
          className={`bg-blue-500 hover:bg-blue-600 text-white hover:text-white font-bold py-2 px-4 ${activeView === 'meme' ? 'bg-blue-600' : ''}`}
          onClick={() => handleViewChange('meme')}
        >
          Meme
        </Button>
        <Button
          className={`bg-blue-500 hover:bg-blue-600 text-white hover:text-white font-bold py-2 px-4 ${activeView === 'tasks' ? 'bg-blue-600' : ''}`}
          onClick={() => handleViewChange('tasks')}
        >
          Tasks
        </Button>
        <Button
          className={`bg-blue-500 hover:bg-blue-600 text-white hover:text-white font-bold py-2 px-4 ${activeView === 'withdrawal' ? 'bg-blue-600' : ''}`}
          onClick={() => handleViewChange('withdrawal')}
        >
          Withdrawal
        </Button>
      </Block>
    </App>)
}

export default UserDashboard