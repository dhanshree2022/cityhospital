import { AUTH_ERROR, FORGOT_REQUEST, FORGOT_RESPONSE, LOGOUT, LOGOUT_REQUEST, SIGNIN_REQUEST, SIGNIN_RESPONSE, SIGNUP_REQUEST, SIGNUP_RESPONSE } from "../Action.types";

const initialState = {
    isLoading: false,
    user: null,
    error: null
}

export const authReducer = (state = initialState, action) => {
    // console.log(action);
    switch (action.type) {
        case SIGNUP_REQUEST:
        case SIGNUP_RESPONSE:
            return {
                isLoading: false,
                user: null,
                error: null
            }

        case SIGNIN_REQUEST:
            return state

        case SIGNIN_RESPONSE:
            return {
                isLoading: false,
                user: action.payload,
                error: null
            }

        case LOGOUT_REQUEST:
            return state

        case LOGOUT:
            return {
                isLoading: false,
                user: null,
                error: null
            }

        case FORGOT_REQUEST:
            return state

        case FORGOT_RESPONSE:
            return {
                isLoading: false,
                user: action.payload,
                error: null
            }
        case AUTH_ERROR:
            return {
                isLoading: false,
                user: null,
                error: action.payload
            }
        default:
            return state
    }
}
