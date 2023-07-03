import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';

const store = configureStore({
  reducer: rootReducer,
  // devTools: process.env.REACT_APP_PROJECT_ENV !== 'production',
});

export default store;
