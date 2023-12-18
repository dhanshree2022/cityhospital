import { ADD_TO_CART, DEC_QTY, DELETE_ITEM, INC_QTY } from "../Action.types"

export const addToCart = (id) => (dispatch) => {
    dispatch({type:ADD_TO_CART, payload: {id:id,qty:1}})
}

export const increment = (id) => (dispatch)=>{
    dispatch({type:INC_QTY, payload:id})
}

export const decrement = (id) => (dispatch) => {
    dispatch({type:DEC_QTY, payload:id})
}

export const deleteItem = (id)=> (dispatch)=>{
    dispatch({type:DELETE_ITEM,payload:id})
}

