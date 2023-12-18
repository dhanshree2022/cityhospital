import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    count:0
}

export const counterSlice = createSlice({
    name:'counter',
    initialState,
    reducers:{
        increment:(state,acttion) => {
            state.count +=1
            console.log(acttion);
        },
        decrement:(state,acttion) => {
            state.count -=1
        }
    }
})

export const {increment,decrement} = counterSlice.actions;
export default counterSlice.reducer