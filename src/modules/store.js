import { createStore, applyMiddleware, compose } from "redux";
import {thunk} from 'redux-thunk'
import reducers from "./reducers";

// import { composeWithDevTools } from 'redux-devtools-extension';
import { loadFromLocalStorage, saveToLocalStorage } from "./localStorage";

const store = createStore(reducers, loadFromLocalStorage(), compose(applyMiddleware(thunk)));

store.subscribe(() => saveToLocalStorage(store.getState()));

export default store;