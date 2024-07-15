 
import './App.css'
import React from 'react'
import { retrieveLaunchParams } from '@telegram-apps/sdk';
import ngrok from 'ngrok';

async function startNgrok() {
  try {
    const url = await ngrok.connect(3000);
    console.log(`Ngrok URL: ${url}`);
  } catch (err) {
    console.error('Error starting ngrok:', err);
  }
}

startNgrok();
const App = () => {
  const launchParams = retrieveLaunchParams();
  const fristname =launchParams.initData?.user?.firstName
  const lastname =launchParams.initData?.user?.lastName
  return (
    <div>
      App{fristname}
    <p>
      App{lastname}
    
    </p>
    </div>
  )
}

export default App;