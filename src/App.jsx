import { App, Block, Button, Navbar } from 'konsta/react';
import { useEffect, useState } from "react";
import Tasks from "./components/frontend/Tasks";
import Withdrawal from "./components/frontend/Withdrawal";
import Meme from "./components/frontend/Meme";
import "tailwindcss/tailwind.css";
import { FaUserCircle } from 'react-icons/fa';
import LaunchParams from "./Url";

import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { retrieveLaunchParams } from '@telegram-apps/sdk';


export default function Home() {
  const launchParam = retrieveLaunchParams();

  const telegramId = launchParam.initData.user.id
  const userName = launchParam.initData?.user?.username || '';
  const firstName = launchParam.initData?.user?.firstName || '';
  const lastName = launchParam.initData?.user?.lastName || '';

  const [activeView, setActiveView] = useState('meme');
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const isComponentMounted = useRef(false);

  useEffect(() => {
    if (!isComponentMounted.current) {
      // Dispatch createUser action when component mounts
      isComponentMounted.current = true;
    }
  }, [dispatch]);

  const handleViewChange = (view) => {
    setActiveView(view);
  };

  return (
    <App safeAreas className="w-full bg-slate-900 text-white h-screen">
      <Navbar className='px-5'>
        <div className='flex flex-row w-full'>
          <span className='w-1/2 flex flex-row gap-2 items-center'>
            <FaUserCircle size={32} />
            {userName}
          </span>
          <span className='w-1/2 flex justify-end items-center'>
            Balance: {firstName}
          </span>
        </div>
      </Navbar>
      <Block className="mb-6">
        {activeView === 'meme' && <Meme />}
        {activeView === 'tasks' && <Tasks />}
        {activeView === 'withdrawal' && <Withdrawal />}
      </Block>
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
