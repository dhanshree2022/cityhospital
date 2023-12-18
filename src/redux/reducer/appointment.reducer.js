import { ADD_APPOINTMENT, DELETE_APPOINTMENT,  GET_APPOINTMENT,  UPDATE_APPOINTMENT } from "../Action.types";

const initialState = {
    isLoading: false,
    appointment: [],
    error: null
}
export const appointmentReducer = (state = initialState, action) => {
    // console.log(action);

    switch (action.type) {
        case GET_APPOINTMENT:
            return {
                ...state,
                appointment: action.payload
            }
        case DELETE_APPOINTMENT:
            return {
                ...state,
                appointment: state.appointment.filter((v) => v.id !== action.payload)
            }
        case ADD_APPOINTMENT:
            return {
                ...state,
                appointment: state.appointment.concat(action.payload)
            }
        case UPDATE_APPOINTMENT:
            return {
                ...state,
                appointment: state.appointment.map((v) => {
                    if (v.id === action.payload.id) {
                        return action.payload
                    } else {
                        return v
                    }
                })
            }

        default:
            return state
    }
}