import { combineReducers } from "redux";
import userReducer from "./reducers/UserReducer";

export const rootReduce = combineReducers({
    userList: userReducer
})