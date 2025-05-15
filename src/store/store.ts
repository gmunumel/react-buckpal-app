import { configureStore } from '@reduxjs/toolkit';
import { userReducer, accountReducer, activityReducer } from 'store/slices';

export const store = configureStore({
  reducer: {
    users: userReducer,
    accounts: accountReducer,
    activities: activityReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
