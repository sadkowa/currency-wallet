import { createStore, applyMiddleware } from "redux";

import reducers from "./reducers";

import { loadFromLocalStorage, saveToLocalStorage } from "./localStorage";

const store = createStore(reducers, loadFromLocalStorage(), applyMiddleware());

store.subscribe(() => saveToLocalStorage(store.getState()));

export default store;