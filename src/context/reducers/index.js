import {combineReducers} from "redux"
import authReducer from "./authReducers";

const rootReducer = combineReducers({
    logged: authReducer,
})

export default rootReducer;
