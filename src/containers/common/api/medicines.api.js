import { addRequest, deleteRequest, getRequest, updateRequest } from "../request"

export const getMedicinesData= ()=> {
    return getRequest('medicines/');
}

export const addMedicinesData = (data)=>{
    return addRequest('medicines/',data);
}

export const updateMedicinesData = (data)=>{
    return updateRequest('medicines/',data);
}

export const deleteMedicinesData = (id) => {
    return deleteRequest('medicines/', id);

}

