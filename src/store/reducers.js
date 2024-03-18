/* import { createReducer, } from '@reduxjs/toolkit';
import { fetchTodosSuccess, fetchTodosFailure } from './actions';

const initialState = {
  todos: [],
  loading: false,
  error: null,
};

const todosReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(fetchTodosSuccess, (state, action) => {
      state.todos = action.payload;
      state.loading = false;
      state.error = null;
    })
    .addCase(fetchTodosFailure, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
});

export default todosReducer; */

import { createSlice } from '@reduxjs/toolkit';
import { fetchTodosSuccess, fetchTodosFailure } from './actions';

const initialState = {
  todos: [],
  loading: false,
  error: null,
};

const todosReducer = createSlice({
  name: "todos",
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodosSuccess, (state, action) => {
        state.todos = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchTodosFailure, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  }
})

export const { } = todosReducer.actions;
export default todosReducer.reducer;