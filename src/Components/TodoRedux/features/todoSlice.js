import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import todoService from './todoService';

export const fetchTodos = createAsyncThunk(
  'todo/fetchTodos',
  async (thunkAPI) => {
    const response = await todoService.get();
    return response.data;
  }
);

export const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    list: [],
    isLoading: false,
  },
  reducers: {
    add: (state, action) => {
      state.list.push(action.payload);
    },
    remove: (state, action) => {
      state.list = state.list.filter((task) => task.id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.fulfilled, (state, action) => {
        // Add all todos to the state array
        state.list = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchTodos.pending, (state, action) => {
        // Update loading status
        state.isLoading = true;
      });
  },
});

export const { add, remove } = todoSlice.actions;
export default todoSlice.reducer;
