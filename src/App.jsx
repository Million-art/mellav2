
import {   useState } from "react";
import Tasks from "./components/frontend/Tasks";
import Withdrawal from "./components/frontend/Withdrawal";
import Meme from "./components/frontend/Meme";
import { retrieveLaunchParams } from '@telegram-apps/sdk';

  
export default function Home() {
   const launchParams = retrieveLaunchParams();

  const [activeView, setActiveView] = useState('meme');
   const telegramId = launchParams.initData?.user?.id;
  const userName = launchParams.initData?.user?.username;
  const firstName = launchParams.initData?.user?.firstName;
  const lastName = launchParams.initData?.user?.lastName;
  
 

  const handleViewChange = (view) => {
    setActiveView(view);
  };

  return (
    <section className="w-full bg-gray-900 text-white h-screen">
      <div className="px-5 mb-6">
        
      <h1>user name :{userName}</h1>
      </div>
      <div className="mb-6">
        {activeView === 'meme' && <Meme />}
        {activeView === 'tasks' && <Tasks />}
        {activeView === 'withdrawal' && <Withdrawal />}
      </div>
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
    </section>
  );
}