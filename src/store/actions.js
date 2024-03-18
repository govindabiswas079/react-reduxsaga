import { createAction } from '@reduxjs/toolkit';

export const fetchTodosRequest = createAction('FETCH_TODOS_REQUEST');
export const fetchTodosSuccess = createAction('FETCH_TODOS_SUCCESS');
export const fetchTodosFailure = createAction('FETCH_TODOS_FAILURE');

export const createTodoRequest = createAction('CREATE_TODO_REQUEST');
export const createTodoSuccess = createAction('CREATE_TODO_SUCCESS');
export const createTodoFailure = createAction('CREATE_TODO_FAILURE');