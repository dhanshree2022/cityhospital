import { ADD_APPOINTMENT, DELETE_APPOINTMENT, GET_APPOINTMENT, UPDATE_APPOINTMENT } from "../Action.types"

export const addAppointment = (data) => (dispatch) => {
    dispatch({type:ADD_APPOINTMENT, payload: data})
}

export const updateAppointment = (data) => (dispatch)=>{
    dispatch({type:UPDATE_APPOINTMENT, payload:data})
}

export const getAppointment = () => (dispatch) => {
    dispatch({type:GET_APPOINTMENT, payload:data})
}

export const deleteAppointment = (id)=> (dispatch)=>{
    dispatch({type:DELETE_APPOINTMENT,payload:id})
}

