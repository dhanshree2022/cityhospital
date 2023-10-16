import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { rootReducer } from "./reducer";


export const cofigureStore = () =>{
    let store = createStore(rootReducer, applyMiddleware(thunk));

    return store;
}