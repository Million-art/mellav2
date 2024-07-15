import { retrieveLaunchParams } from '@telegram-apps/sdk';

import './App.css'

function App() {
  const launchParams = retrieveLaunchParams();
  const fristname = launchParams.initData.user.firstName
  return (
    <>
      
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more{fristname}
      </p>
    </>
  )
}

export default App
