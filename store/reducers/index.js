import { combineReducers } from "redux";
import global from "./globalReducer";
import status from "./statusReducer";

export default combineReducers({
    global: global,
    status: status
})