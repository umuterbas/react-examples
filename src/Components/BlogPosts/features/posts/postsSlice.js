import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { addDecorator } from '@storybook/react';

import postsService from './postsService';

export const fetchPosts = createAsyncThunk(
  'posts/fetchPosts',
  async (thunkAPI) => {
    return await postsService.get();
  }
);

export const postAPost = createAsyncThunk(
  'posts/postAPost',
  async (post, thunkAPI) => {
    return await postsService.post(post);
  }
);

export const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    list: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.list = action.payload;
      })
      .addCase(postAPost.fulfilled, (state, action) => {
        state.list.push(action.payload);
      });
  },
});

export default postsSlice.reducer;
