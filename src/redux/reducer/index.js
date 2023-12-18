import { combineReducers } from "redux";
import { departmentsReducer } from "./departments.reducer";
import { shoppingReducer } from "./shoppingcart.reducer";
import { doctorReducer } from "./doctor.reducer";
import counterSlice from "../slice/counter.slice";
import cartSlice from "../slice/cart.slice";
import medicinesSlice from "../slice/medicines.slice";
import appointmentSlice from "../slice/appointment.slice";
import { authReducer } from "./auth.reducer";
import alertSlice from "../slice/alert.slice";

export const rootReducer = combineReducers({
    counter: counterSlice,
    medicines : medicinesSlice,
    departments : departmentsReducer,
    cart: cartSlice,
    shoppingcart: shoppingReducer,
    doctor: doctorReducer,
    appointment: appointmentSlice,
    auth:authReducer,
    alert:alertSlice
}) 