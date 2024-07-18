import { configureStore } from '@reduxjs/toolkit';
import UserSlice from '../feature/UserSlice';
  
 const store = configureStore({
  reducer: {
     users: UserSlice,
   },
});

export default store;
