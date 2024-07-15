'use client'
 
import { retrieveLaunchParams } from '@telegram-apps/sdk';
export default function Home() {
 
const launchParams = retrieveLaunchParams();
const fristname = launchParams.initData.user.firstName

  return (
     <div>My application!{fristname}</div>
   );
}
