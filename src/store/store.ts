import {combineReducers, createStore} from "redux";
import {counterReducer} from "./reducer";

const rootReducers = combineReducers({
    counter: counterReducer})

export const store = createStore(rootReducers)

export type AppRootStateType = ReturnType<typeof rootReducers>

// @ts-ignore
window.store = store