import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import LaunchParams from "@/app/components/UrRLSearchParams";
 
const initialState = {
  userName: '',
  telegramId: 0,
  firstName: '',
  lastName: '',
  referredBy: null,
  balance: 0
};

export const createUser = createAsyncThunk(
  'users/createUser',
  async (_, { rejectWithValue, dispatch }) => {
    try {
      const launchParam = LaunchParams();
      const telegramId = launchParam.initData?.user?.id;
      const userName = launchParam.initData?.user?.username;
      const firstName = launchParam.initData?.user?.firstName;
      const lastName = launchParam.initData?.user?.lastName;
 
      const user = {
        userName: userName || '',
        telegramId: telegramId || 0,
        firstName: firstName || '',
        lastName: lastName || '',
        referredBy: null,
        balance: 0,
      };

      const response = await fetch('https://mella.dirtechsolution.com/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });

      if (response.ok) {
        const newUser = await response.json();
        dispatch(addUser(newUser));
        return newUser;
      } else {
        return rejectWithValue('Failed to create user');
      }
    } catch (error) {
      return rejectWithValue('Error creating user');
    }
  }
);

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUser: (state, action ) => {
      return action.payload;
    },
  },

});

export const { addUser } = userSlice.actions;
export default userSlice.reducer;