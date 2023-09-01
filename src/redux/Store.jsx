import { legacy_createStore } from "redux";
import { Reducer } from "./Reducer";


//legacy_createStore

export let Store = legacy_createStore(Reducer,
    window._REDUX_DEVTOOLS_EXTENSION && window._REDUX_DEVTOOLS_EXTENSION());