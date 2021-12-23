import counterReducer  from "./counter";
import  isLoggedIn  from "./isLogged";
import bugReducer from './bug'
import { combineReducers } from "redux";

const allReducer = combineReducers({
    counter: counterReducer,
    isLoggedIn: isLoggedIn,
    bug: bugReducer
})

export default allReducer

