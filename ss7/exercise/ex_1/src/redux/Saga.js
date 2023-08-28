import { put, takeLatest } from 'redux-saga/effects';
import { GET_ALL_USER_LIST, DELETE_USER, GET_ALL_USER_LIST_SUCCESS, DELETE_USER_SUCCESS } from '../redux/Types';
import { getAllUser , deleteUser } from '../services/UserService';


function* getUserList() {
    const result = yield getAllUser();
    yield put({
        type: GET_ALL_USER_LIST_SUCCESS,
        payload: result.data
    });
}

function* deleteUserInList(payload){
    const result = yield deleteUser(payload.payload);
    if(result.status === 200){
        alert("respone status" + result.status)
    }
    yield put({
        type: GET_ALL_USER_LIST,
    })
}

function* usersSaga() { 
    yield takeLatest(GET_ALL_USER_LIST, getUserList);
    yield takeLatest(DELETE_USER, deleteUserInList);
    
}

export default usersSaga;


