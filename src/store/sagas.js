import { takeEvery, put, call } from 'redux-saga/effects';
import {
    fetchTodosSuccess,
    fetchTodosFailure,
    fetchTodosRequest,
    createTodoRequest,
    createTodoSuccess,
    createTodoFailure,
} from './actions';
import { fetchTodos, fetchTech, createTech } from './api';

function* fetchTodosSaga(action) {

    try {
        const { currentPage =  1, pageSize = 20 } = action?.payload;
        const todos = yield call(fetchTech, currentPage, pageSize);
        yield put(fetchTodosSuccess(todos));
    } catch (error) {
        yield put(fetchTodosFailure(error.message));
    }
}

function* createTodoSaga(action) {
    try {
        const todo = yield call(createTech, action.payload);
        yield put(createTodoSuccess(todo));
    } catch (error) {
        yield put(createTodoFailure(error.message));
    }
}

export default function* rootSaga() {
    yield takeEvery(fetchTodosRequest.type, fetchTodosSaga);
    yield takeEvery(createTodoRequest.type, createTodoSaga);
}