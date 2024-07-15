'use client'
import { useEffect, useRef, useState } from "react";
import Tasks from "./components/frontend/Tasks";
import Withdrawal from "./components/frontend/Withdrawal";
import Meme from "./components/frontend/Meme";
import { Page, Navbar, Block } from 'konsta/react';
 
  
export default function Home() {
   const launchParams = retrieveLaunchParams();

  const [activeView, setActiveView] = useState('meme');
   const telegramId = launchParams.initData?.user?.id;
  const userName = launchParams.initData?.user?.username;
  const firstName = launchParams.initData?.user?.firstName;
  const lastName = launchParams.initData?.user?.lastName;
  const user = {
    userName: userName ,
    telegramId: telegramId,
    firstName: firstName ,
    lastName: lastName ,
    referredBy: null,
    balance: 0,
  };
 

  const handleViewChange = (view) => {
    setActiveView(view);
  };

  return (
    <Page className="w-full bg-gray-900 text-white h-screen">
      <Navbar className="px-5 mb-6">
        
      <h1>user name :{userName}</h1>
      </Navbar>
      <Block className="mb-6">
        {activeView === 'meme' && <Meme />}
        {activeView === 'tasks' && <Tasks />}
        {activeView === 'withdrawal' && <Withdrawal />}
      </Block>
      <section className="space-x-4 absolute bottom-1 bg-blue-500 w-full flex justify-center">
        <button
          className={`bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded ${activeView === 'meme' ? 'bg-blue-600' : ''}`}
          onClick={() => handleViewChange('meme')}
        >
          Meme
        </button>
        <button
          className={`bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded ${activeView === 'tasks' ? 'bg-blue-600' : ''}`}
          onClick={() => handleViewChange('tasks')}
        >
          Tasks
        </button>
        <button
          className={`bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded ${activeView === 'withdrawal' ? 'bg-blue-600' : ''}`}
          onClick={() => handleViewChange('withdrawal')}
        >
          Withdrawal
        </button>
      </section>
    </Page>
  );
}