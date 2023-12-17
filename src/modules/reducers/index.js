import { combineReducers } from "redux";

import { reducer as localStorageReducer } from "../localStorage";
import { reducer as ratesApiReducer } from '../exchangeRates'


const reducers = combineReducers({
    localStorage: localStorageReducer,
    ratesApi: ratesApiReducer

})

export default reducers