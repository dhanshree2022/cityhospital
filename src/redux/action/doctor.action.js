import { addDoctorData, deleteDoctorData, getDoctorData, updateDoctorData } from "../../containers/common/api/doctor.api";
import { API_URL } from "../../utils/baseUrl";
import { ADD_DOCTOR, DELETE_DOCTOR, GET_DOCTOR, UPDATE_DOCTOR } from "../Action.types";

export const getDoctor = () => (dispatch) =>{
    // console.log("hello");
    try{
        getDoctorData()
        .then((response)=>dispatch({type:GET_DOCTOR,payload:response.data}))
        .catch((error)=> console.log(error))


    } catch (error){
        console.log(error)
    }
}

export const deleteDoctor = (id) => (dispatch) => {
    try{
        deleteDoctorData(id)
        .then(dispatch({type:DELETE_DOCTOR,payload:id}))
        .catch((error)=> console.log(error))

    }catch (error){
        console.log(error)
    }
} 

export const addDoctor = (data) => (dispatch)=> {
    try{
        addDoctorData(data)
        .then((response)=>dispatch({type:ADD_DOCTOR,payload:response.data}))
        .catch((error)=> console.log(error))

    } catch (error) { 
        console.log(error);
    }
}

export const updateDoctor = (data) => (dispatch)=> {
    try{
        updateDoctorData(data)
        .then((response)=>dispatch({type:UPDATE_DOCTOR,payload:response.data}))
        .catch((error)=> console.log(error))

    } catch (error) { 
        console.log(error);
    }
}