import { configureStore } from '@reduxjs/toolkit';
import contentLibraryReducer from '../src/features/contentLibrary/contentLibrarySlice';

export const store = configureStore({
  reducer: {
    contentLibrary: contentLibraryReducer,
    // Add other reducers here as needed
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
