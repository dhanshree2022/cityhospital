import { ADD_SHOPPING_CART, DECREMENT_CART, INCREMENT_CART, REMOVE_SHOPPING_CART } from "../Action.types"


export const addShoppingCart = (id) => (dispatch)=>{
    dispatch({type:ADD_SHOPPING_CART, payload: {id:id,qty:1}})

}

export const incrementShoppingCart = (id) => (dispatch)=>{
    dispatch({type:INCREMENT_CART, payload:id})

}

export const decrementShoppingCart = (id) => (dispatch)=>{
    dispatch({type:DECREMENT_CART, payload:id})

}
 
export const removeShoppingCart = (id) => (dispatch)=>{
    dispatch({type:REMOVE_SHOPPING_CART, payload:id})

}