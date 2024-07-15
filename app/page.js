import { SDKProvider } from '@telegram-apps/sdk-react';
import {
 
  useViewport,
  } from '@telegram-apps/sdk-react';
import { useEffect } from 'react';
import { retrieveLaunchParams } from '@telegram-apps/sdk';
export default function Home() {
  const vp = useViewport();

useEffect(() => {
  console.log(vp); // will be undefined and then Viewport instance.
}, [vp]);
const launchParams = retrieveLaunchParams();
const fristname = launchParams.initData.user.firstName

  return (
    <SDKProvider acceptCustomStyles debug>
    <div>My application!{fristname}</div>
  </SDKProvider>
  );
}
