import { createSlice } from '@reduxjs/toolkit';

export const loggedSlice = createSlice({
  name: 'logged',
  initialState: {
    value: false,
  },
  reducers: {
    signIn: (state) => {
      state.value = true;
    },
    signOut: (state) => {
      state.value = false;
    },
  },
});

export const { signIn, signOut } = loggedSlice.actions;

export default loggedSlice.reducer;
