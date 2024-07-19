import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  userName: '',
  telegramId: 0,
  firstName: '',
  lastName: '',
  referredBy: null,
  balance: 0,
};

export const createUser = createAsyncThunk(
  'user/createUser',
  async (_, { rejectWithValue, dispatch }) => {
    try {
      const user = {
        userName,
        telegramId,
        firstName,
        lastName,
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
        dispatch(addUser(newUser)); // Dispatch addUser action to update Redux state
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
    
  },
  extraReducers: (builder) => {
    builder.addCase(createUser.fulfilled, (state, action) => {
      state.userName = action.payload.userName; 
      state.telegramId = action.payload.telegramId;
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.balance = action.payload.balance;
    });
  },
});

export const {   } = userSlice.actions;
export default userSlice.reducer;
