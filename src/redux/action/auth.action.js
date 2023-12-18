import { AUTH_ERROR, FORGOT_REQUEST, FORGOT_RESPONSE, LOGOUT, LOGOUT_REQUEST, SIGNIN_REQUEST, SIGNIN_RESPONSE, SIGNUP_REQUEST, SIGNUP_RESPONSE } from "../Action.types"

export const signupRequest = (data) => (dispatch) => {
    dispatch({type:SIGNUP_REQUEST, payload: data})
}

export const signupResponse = (data) => (dispatch) => {
    dispatch({type:SIGNUP_RESPONSE, payload: data})
}

export const authError = (data) => (dispatch) => {
    dispatch({type:AUTH_ERROR, payload: data})
}

export const signinRequest = (data) => (dispatch) => {
    dispatch({type:SIGNIN_REQUEST, payload: data})
}

export const signinResponse = (data) => (dispatch) => {
    dispatch({type:SIGNIN_RESPONSE, payload: data})
}

export const logoutRequest = () => (dispatch) => {
    dispatch({type:LOGOUT_REQUEST})
}

export const logout = () => (dispatch) => {
    dispatch({type:LOGOUT})
}

export const forgotRequest = (data) => (dispatch) => {
    dispatch({type:FORGOT_REQUEST, payload:data})
}

export const forgotResponse = (data) => (dispatch) => {
    dispatch({type:FORGOT_RESPONSE, payload:data})

}