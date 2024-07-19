import { useEffect, useState } from "react";
import axios from 'axios';
//  import LaunchParams from "./Url";
import registerUser from '../utils/registerUser';
import { App, Block, Button, Navbar } from 'konsta/react';
import Tasks from "./components/frontend/Tasks";
import Withdrawal from "./components/frontend/Withdrawal";
import Meme from "./components/frontend/Meme";
import { FaUserCircle } from 'react-icons/fa';
import { retrieveLaunchParams } from '@telegram-apps/sdk';


const launchParam = retrieveLaunchParams();
const telegramId = launchParam.initData?.user?.id || 0;
const userName = launchParam.initData?.user?.username || '';
const firstName = launchParam.initData?.user?.firstName || '';
const lastName = launchParam.initData?.user?.lastName || '';

export default function Home() {
  const [user, setUser] = useState(null);

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
            {user && (
              <div>
                <FaUserCircle size={32} />
                {user[0].userName}
              </div>
            )}
          </span>
          <span className='w-1/2 flex justify-end items-center'>
            {user && `Balance: ${user[0].balance}`}
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
    </App>
  );
}