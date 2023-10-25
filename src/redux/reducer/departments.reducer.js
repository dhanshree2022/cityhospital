import { ADD_DEPARTMENTS, DELETE_DEPARTMENTS, GET_DEPARTMENTS, UPDATE_DEPARTMENTS } from "../Action.types";

const initialState = {
    isLoading: false,
    departments: [],
    error: null
}
export const departmentsReducer = (state = initialState, action) => {
    console.log(action);

    switch (action.type) {
        case GET_DEPARTMENTS:
            return {
                ...state,
                departments: action.payload
            }
        case DELETE_DEPARTMENTS:
            return {
                ...state,
                departments: state.departments.filter((v) => v.id !== action.payload)
            }
        case ADD_DEPARTMENTS:
            return {
                ...state,
                departments: state.departments.concat(action.payload)
            }
        case UPDATE_DEPARTMENTS:
            return {
                ...state,
                departments: state.departments.map((v) => {
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