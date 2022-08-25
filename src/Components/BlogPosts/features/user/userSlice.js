import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import userService from './userService';

export const login = createAsyncThunk('user/login', async () => {
  return await userService.login();
});

const userSlice = createSlice({
  name: 'user',
  initialState: {
    info: {
      id: '',
      email: '',
      name: '',
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, action) => {
      console.log('payload', action.payload);
      state.info.id = action.payload.user.uid;
      state.info.email = action.payload.user.email;
      state.info.name = action.payload.user.displayName;
    });
  },
});

export default userSlice.reducer;
