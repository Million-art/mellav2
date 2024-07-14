import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { retrieveLaunchParams } from '@telegram-apps/sdk';
import {
  useBackButton,
   useViewport,
 } from '@telegram-apps/sdk-react';
import { useEffect } from 'react';

// BackButton initializes synchronously. So, bb will be 
// the BackButton instance.
const bb = useBackButton();

// Viewport is being initialized asynchronously, so signal may return undefined.
// After some time it will receive a valid value.
const vp = useViewport();

useEffect(() => {
  console.log(vp); // will be undefined and then Viewport instance.
}, [vp]);

  
const { initDataRaw, initData } = retrieveLaunchParams();
function App() {
  const [count, setCount] = useState(0)
  const id = initData?.user?.id
  const user = initData?.user?.username


   
  
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React  
      </p>
      <p>user id {id}</p>
      <p>user id {user}</p>
    </>
  )
}

export default App
