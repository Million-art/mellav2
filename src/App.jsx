import { useEffect, useState } from "react";
import axios from 'axios';
import LaunchParams from "./Url";
import registerUser from '../utils/registerUser';
import UserDashboard from "./UserDashboard";
import { retrieveLaunchParams } from '@telegram-apps/sdk';

 
const launchParam = retrieveLaunchParams();
const telegramId = launchParam.initData?.user?.id || 0;
const userName = launchParam.initData?.user?.username || '';
const firstName = launchParam.initData?.user?.firstName || '';
const lastName = launchParam.initData?.user?.lastName || '';

export default function Home() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const isUserAvailableOnLocalStorage = localStorage.getItem('user');
    if (isUserAvailableOnLocalStorage) {
      const storedUser = JSON.parse(isUserAvailableOnLocalStorage);
      setUser(storedUser);
    } else {
      checkUserRegistration();
    }
  }, [telegramId]);

  const checkUserRegistration = async () => {
    try {
      const response = await axios.get(`http://localhost:3001/users/${telegramId}`);
      const userData = response.data;
      console.log('Response data:', userData);

      if (Array.isArray(userData) && userData.length === 0) {
        console.log('User not found, registering...');
        const newUserData = {
          telegramId,
          userName,
          firstName,
          lastName,
          referredBy: null,
          balance: 0
        };
        await registerUser(newUserData);
        localStorage.setItem('user', JSON.stringify(newUserData));
        setUser(newUserData);
      } else {
        console.log('User already registered:', userData);
        localStorage.setItem('user', JSON.stringify(userData));
        setUser(userData);
      }
    } catch (error) {
      console.error('Error checking user registration:', error);
    }
  };

  return (
    <div>
      {user && <UserDashboard user={user} />}
    </div>
  );
}