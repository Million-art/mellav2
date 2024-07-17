import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  reducer: {
    tasks: taskReducer,
    users: usersReducer,
    loading: loadingReducer,
  },
})