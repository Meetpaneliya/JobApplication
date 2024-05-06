import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './jobReducer';

const store = configureStore({
  reducer: rootReducer,
});

export default store;
