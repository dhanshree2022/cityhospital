import { combineReducers } from "redux";
import { CountReducer } from "./counter.reducer";

export const rootReducer = combineReducers({
    counter: CountReducer
}) 