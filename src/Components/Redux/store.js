import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';
import loggedReducer from './loggedSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
    logged: loggedReducer,
  },
});
