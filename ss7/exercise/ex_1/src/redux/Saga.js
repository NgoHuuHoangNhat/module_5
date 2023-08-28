import { put, takeLatest } from 'redux-saga/effects';
import { GET_ALL_USER_LIST, DELETE_USER, GET_ALL_USER_LIST_SUCCESS } from '../redux/Types';
import { getAllUser , deleteUser } from '../services/UserService';
import { useLayoutEffect } from 'react';


function* getUserList() {
    const result = yield getAllUser();
    yield put({
        type: GET_ALL_USER_LIST_SUCCESS,
        payload: result.data
    });
}

function* deleteUser(){
    const result = yield deleteUser()
}

function* usersSaga() { 
    yield takeLatest(GET_ALL_USER_LIST, getUserList);
    yield takeLatest(DELETE_USER, deleteUser);
    
}

export default usersSaga;


