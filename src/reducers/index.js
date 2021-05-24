import {combineReducers} from "redux";
import {statusReducer} from "./status";
import {tasksReducer} from "./tasks";

const rootReducer = combineReducers({
    status : statusReducer,
    tasks : tasksReducer,
})

export default rootReducer;