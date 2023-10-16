import { DECREMENT_COUNTER, INCREMENT_COUNTER } from "../Action.types"

export const increment = () => (dispatch) => {
    dispatch({type : INCREMENT_COUNTER})
}

export const decrement = () => (dispatch) => {
    dispatch({type : DECREMENT_COUNTER})
}