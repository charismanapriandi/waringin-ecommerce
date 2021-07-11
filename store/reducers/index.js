import { combineReducers } from "redux";
import global from "./globalReducer";
import memory from "./memoryReducer";
import status from "./statusReducer";

export default combineReducers({
    global: global,
    status: status,
    memory: memory
})