 
import './App.css'
import { retrieveLaunchParams } from '@telegram-apps/sdk';
import {
  useViewport,
} from '@telegram-apps/sdk-react';
import { useEffect } from 'react';



// Viewport is being initialized asynchronously, so signal may return undefined.
// After some time it will receive a valid value.
const vp = useViewport();

useEffect(() => {
  console.log(vp); // will be undefined and then Viewport instance.
}, [vp]);


const {  initData } = retrieveLaunchParams();
function App() {
   const id = initData?.user?.id
  const user = initData?.user?.username




  return (
    <>
      <div>
      
      </div>
      <h1>Vite + React</h1>
       
 
      <p className="read-the-docs">
        Click on the Vite and React
      </p>
      <p>user id {id}</p>
      <p>user id {user}</p>
    </>
  )
}

export default App
