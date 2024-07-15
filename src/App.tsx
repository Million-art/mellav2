 
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
  return (
    <div>App{fristname}</div>
  )
}

export default App;