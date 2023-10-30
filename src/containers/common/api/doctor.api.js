import { addRequest, deleteRequest, getRequest, updateRequest } from "../request";

export const getDoctorData= ()=> {
    return getRequest('doctor/');
}

export const addDoctorData = (data)=>{
    return addRequest('doctor/',data);
}

export const updateDoctorData = (data)=>{
    return updateRequest('doctor/',data);
}

export const deleteDoctorData = (id) => {
    return deleteRequest('doctor/', id);

}