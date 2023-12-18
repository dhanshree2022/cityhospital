import { ADD_SHOPPING_CART, DECREMENT_CART, INCREMENT_CART, REMOVE_SHOPPING_CART } from "../Action.types";

const initialState = {
    isLoading: false,
    shoppingcart: [],
    error: null,
}

export const shoppingReducer = (state=initialState,action) =>{
    // console.log(action);
    switch(action.type){
        case ADD_SHOPPING_CART:
            let check = state.shoppingcart.some((v) => v.id === action.payload.id)
            // console.log(check);

            if (check) {
                let index = state.shoppingcart.findIndex((v) => v.id === action.payload.id)
                state.shoppingcart[index].qty++
                console.log(index);
            } else {
                state.shoppingcart.push(action.payload)
            }
            return {
                shoppingcart: state.shoppingcart
            }

        case INCREMENT_CART:

        let index = state.shoppingcart.findIndex((v) => v.id === action.payload);
            // console.log(index);
            state.shoppingcart[index].qty++
            return {
                isLoading: false,
                shoppingcart: state.shoppingcart,
                error: null
            }

        case DECREMENT_CART:
            let index1 = state.shoppingcart.findIndex((v)=> v.id === action.payload);
            // if(state.shoppingcart[index1] > 0){
                state.shoppingcart[index1].qty--

            // }
            // console.log(index1);

            return{
                isLoading: false,
                shoppingcart: state.shoppingcart,
                error:null
            }

        case REMOVE_SHOPPING_CART:
            return {
                ...state,
                shoppingcart: state.shoppingcart.filter((v) => v.id !== action.payload)
            }
            
        default:
        return state
    }
}