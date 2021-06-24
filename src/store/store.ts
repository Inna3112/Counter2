import {combineReducers, createStore} from "redux";
import {counterReducer} from "./reducer";
import {loadState, saveState} from "../utils/localestorage-utils";

const rootReducers = combineReducers({
    counter: counterReducer})


export const store = createStore(rootReducers, loadState())

store.subscribe( () => {
    saveState({counter: store.getState().counter})

})

export type AppRootStateType = ReturnType<typeof rootReducers>

// @ts-ignore
window.store = store