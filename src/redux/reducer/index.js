import { combineReducers } from "redux";
import { CountReducer } from "./counter.reducer";
import { medicinesReducer } from "./medicines.reducer";
import { departmentsReducer } from "./departments.reducer";
import { cartReducer } from "./cart.reducer";
import { shoppingReducer } from "./shoppingcart.reducer";

export const rootReducer = combineReducers({
    counter: CountReducer,
    medicines : medicinesReducer,
    departments : departmentsReducer,
    cart: cartReducer,
    shoppingcart: shoppingReducer
}) 