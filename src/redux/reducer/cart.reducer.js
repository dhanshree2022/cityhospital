import { ADD_TO_CART, DEC_QTY, DELETE_ITEM, INC_QTY } from "../Action.types"

const initialState = {
    isLoading: false,
    cart: [],
    error: null
}

export const cartReducer = (state = initialState, action) => {
    // console.log(action)

    switch (action.type) {
        case INC_QTY:
            let index = state.cart.findIndex((v) => v.id === action.payload);
            // console.log(index);
            state.cart[index].qty++
            return {
                isLoading: false,
                cart: state.cart,
                error: null
            }

        case DEC_QTY:
            let index1 = state.cart.findIndex((v) => v.id === action.payload);
            console.log(index1);
            if (state.cart[index1].qty > 1) {

                state.cart[index1].qty--
            }
            return {
                isLoading: false,
                cart: state.cart,
                error: null
            }
        case ADD_TO_CART:
            let check = state.cart.some((v) => v.id === action.payload.id)
            console.log(check);

            if (check) {
                let index = state.cart.findIndex((v) => v.id === action.payload.id)
                state.cart[index].qty++
                console.log(index);
            } else {
                state.cart.push(action.payload)
            }
            return {
                cart: state.cart
            }
        case DELETE_ITEM:{
            return {
                ...state,
                cart: state.cart.filter((v) => v.id !== action.payload)
            }
        }
        default:
            return state
    }
}
