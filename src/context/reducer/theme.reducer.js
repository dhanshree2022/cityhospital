import { TOOGLE_THEME } from "../ActionTypes";

export const themeReducer = (state, action) => {
    console.log(action);
    switch(action.type){
        case TOOGLE_THEME:
            return {
                theme: action.payload
            }
        default:
            return state
    }
}