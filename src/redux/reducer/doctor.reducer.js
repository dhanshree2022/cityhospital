import { ADD_DOCTOR, DELETE_DOCTOR, GET_DOCTOR, UPDATE_DOCTOR } from "../Action.types";

const initialState = {
    isLoading: false,
    doctor: [],
    error: null
}
export const doctorReducer = (state = initialState, action) => {
    console.log(action);

    switch (action.type) {
        case GET_DOCTOR:
            return {
                ...state,
                doctor: action.payload
            }
        case DELETE_DOCTOR:
            return {
                ...state,
                doctor: state.doctor.filter((v) => v.id !== action.payload)
            }
        case ADD_DOCTOR:
            return {
                ...state,
                doctor: state.doctor.concat(action.payload)
            }
        case UPDATE_DOCTOR:
            return {
                ...state,
                doctor: state.doctor.map((v) => {
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