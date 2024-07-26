import { useEffect, useState } from "react";
import axios from 'axios';
//import LaunchParams from "./Url";
import registerUser from '../utils/registerUser';
import { App, Block, Button, Navbar } from 'konsta/react';
import Tasks from "./components/frontend/Tasks";
import Withdrawal from "./components/frontend/Withdrawal";
import Meme from "./components/frontend/Meme";
import Ferns from './components/frontend/Ferns';
import { FaUserCircle, FaUsers } from 'react-icons/fa'; // Import icons
import { FaRegImages, FaList, FaDollarSign } from 'react-icons/fa'; // Import icons

import { retrieveLaunchParams } from '@telegram-apps/sdk';


const launchParam = retrieveLaunchParams();
const telegramId = launchParam.initData?.user?.id || 0;
const userName = launchParam.initData?.user?.username || '';
const firstName = launchParam.initData?.user?.firstName || '';
const lastName = launchParam.initData?.user?.lastName || '';

export default function Home() {
  const [user, setUser] = useState(null);
  const [activeView, setActiveView] = useState('meme');

  useEffect(() => {
    const isUserAvailableOnLocalStorage = localStorage.getItem('user');
    if (isUserAvailableOnLocalStorage) {
      const storedUser = JSON.parse(isUserAvailableOnLocalStorage);
      setUser(storedUser);
    } else {
      checkUserRegistration();
    }
  }, [telegramId]);

  const checkUserRegistration = async () => {
    try {
      const response = await axios.get(`https://mella.dirtechsolution.com/users/${telegramId}`);
      const userData = response.data;
      console.log('Response data:', userData);

      if (Array.isArray(userData) && userData.length === 0) {
        console.log('User not found, registering...');
        const newUserData = {
          telegramId,
          userName,
          firstName,
          lastName,
          referredBy: null,
          balance: 0
        };
        await registerUser(newUserData);
        localStorage.setItem('user', JSON.stringify(newUserData));
        setUser(newUserData);
      } else {
        console.log('User already registered:', userData);
        localStorage.setItem('user', JSON.stringify(userData));
        setUser(userData);
      }
    } catch (error) {
      console.error('Error checking user registration:', error);
    }
  };

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
      case 'ferns':
        return <Ferns />;
      default:
        return null;
    }
  };

  return (
    <App safeAreas className="w-full bg-slate-900 text-white h-screen">
      <Navbar className='px-5'>
        <div className='flex flex-row w-full'>
          <span className='w-1/2 flex flex-row gap-2 items-center'>
            {user && (
              <div className='flex items-center'>
                <FaUserCircle size={32} />
                <span className='ml-2'>{user[0].userName}</span>
              </div>
            )}
          </span>
          <span className='w-1/2 flex justify-end items-center'>
            {user && `Balance: ${user[0].balance}`}
          </span>
        </div>
      </Navbar>
      <Block className="mb-6">{renderView()}</Block>
      <Block className="space-x-4 absolute bottom-1 w-full flex justify-center bg-slate-800 py-2">
        <Button
          className={`flex items-center gap-2 py-2 px-4 font-bold ${activeView === 'meme' ? 'bg-green-500' : 'bg-blue-500'} text-white`}
          onClick={() => handleViewChange('meme')}
        >
          <FaRegImages size={20} />
          Meme
        </Button>
        <Button
          className={`flex items-center gap-2 py-2 px-4 font-bold ${activeView === 'tasks' ? 'bg-green-500' : 'bg-blue-500'} text-white`}
          onClick={() => handleViewChange('tasks')}
        >
          <FaList size={20} />
          Tasks
        </Button>
        <Button
          className={`flex items-center gap-2 py-2 px-4 font-bold ${activeView === 'withdrawal' ? 'bg-green-500' : 'bg-blue-500'} text-white`}
          onClick={() => handleViewChange('withdrawal')}
        >
          <FaDollarSign size={20} />
          Withdrawal
        </Button>
        <Button
          className={`flex items-center gap-2 py-2 px-4 font-bold ${activeView === 'ferns' ? 'bg-green-500' : 'bg-blue-500'} text-white`}
          onClick={() => handleViewChange('ferns')}
        >
          <FaUsers size={20} /> {/* Updated icon for Ferns */}
          Ferns
        </Button>
      </Block>
    </App>
  );
}
