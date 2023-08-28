import { GET_ALL_USER_LIST, DELETE_USER, GET_ALL_USER_LIST_SUCCESS } from '../Types';

const initState = [];

const userReducer = (state = initState, action) => {
    const { type, payload } = action;
    switch (type) {
        case DELETE_USER:
            return state
        case GET_ALL_USER_LIST_SUCCESS:
            return payload;
        default:
            return state;
    }
}

export default userReducer;