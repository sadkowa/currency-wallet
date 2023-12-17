import { combineReducers } from "redux";

import { reducer as localStorageReducer } from "../localStorage";

const reducers = combineReducers({
    localStorage: localStorageReducer
})

export default reducers