import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import userService from './userService';

export const signUp = createAsyncThunk('user/signUp', async (newUser) => {
  return await userService.signUp(newUser);
});
export const signIn = createAsyncThunk('user/signIn', async (user) => {
  return await userService.signIn(user);
});

export const signOut = createAsyncThunk('user/signOut', async () => {
  return await userService.signOut();
});

export const signInGoogle = createAsyncThunk('user/signInGoogle', async () => {
  return await userService.signInGoogle();
});

const userSlice = createSlice({
  name: 'user',
  initialState: {
    info: {
      id: '',
      email: 'test@test.com',
    },
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(signUp.fulfilled, (state, action) => {
        state.info.email = action.payload.user.email;
        state.info.id = action.payload.user.uid;
      })
      .addCase(signIn.fulfilled, (state, action) => {
        console.log(action.payload.user.email);
        state.info.email = action.payload.user.email;
        state.info.id = action.payload.user.uid;
      })
      .addCase(signOut.fulfilled, (state, action) => {
        state.info.email = '';
        state.info.id = '';
      })
      .addCase(signInGoogle.fulfilled, (state, action) => {
        console.log(action.payload.user);
        state.info.email = action.payload.user.email;
        state.info.id = action.payload.user.uid;
      });
  },
});

export default userSlice.reducer;
