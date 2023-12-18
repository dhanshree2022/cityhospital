import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    isLoading: false,
    cart: [],
    error: null
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            console.log(action);
            let check = state.cart.some((v) => v.id === action.payload.id)
            console.log(check);

            if (check) {
                let index = state.cart.findIndex((v) => v.id === action.payload.id)
                state.cart[index].qty++
                console.log(index);
            } else {
                state.cart.push(action.payload)
            }

            state.isLoading= false;
            state.cart = state.cart;
            state.error = null;


        },
        increment: (state, action) => {
            let index = state.cart.findIndex((v) => v.id === action.payload);
            console.log(index);
            state.cart[index].qty++

            state.isLoading= false;
            state.cart = state.cart;
            state.error = null;
        },
        decrement:(state,action) =>{
            let index1 = state.cart.findIndex((v) => v.id === action.payload);
            console.log(index1);
            if (state.cart[index1].qty > 1) {

                state.cart[index1].qty--
            }
            state.isLoading= false;
            state.cart = state.cart;
            state.error = null;
        },

        deleteItem:(state,action)=>{
                state.cart.filter((v) => v.id !== action.payload);

        }

    }
})
export const { addToCart,increment,decrement,deleteItem } = cartSlice.actions;
export default cartSlice.reducer