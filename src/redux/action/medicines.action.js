import { addMedicinesData, deleteMedicinesData, getMedicinesData, updateMedicinesData } from "../../containers/common/api/medicines.api";
import { ADD_MEDICNES, DELETE_MEDICINES, ERROR_MEDICINES, GET_MEDICINES, LOADING_MEDICINES, UPDATE_MEDICINES } from "../Action.types"


export const getMedicines = () => (dispatch) => {
    try {
        dispatch(loadingMedicines())
        setTimeout(() => {
            getMedicinesData()
            .then((response) => dispatch({ type: GET_MEDICINES, payload: response.data }))
            .catch((error) => dispatch(errorMedicines(error.message)))
            
        }, 4000);
    } catch (error) {
        console.log(error);
    }
}

export const deleteMedicines = (id) => (dispatch) => {
    try {
        deleteMedicinesData(id)
        .then(dispatch({ type: DELETE_MEDICINES, payload: id }))
        .catch((error) => dispatch(errorMedicines(error.message)))
        
    } catch (error) {
        console.log(error)
    }
}

export const addMedicines = (data) => (dispatch) => {
    try {
        addMedicinesData(data)
        .then((response) => dispatch({ type: ADD_MEDICNES, payload: response.data }))
        .catch((error) => dispatch(errorMedicines(error.message)))
        
    } catch (error) {
        console.log(error);
    }
}

export const updateMedicines = (data) => (dispatch) => {
    try {
        updateMedicinesData(data)
        .then((response) => dispatch({ type: UPDATE_MEDICINES, payload: response.data }))
            .catch((error) => dispatch(errorMedicines(error.message)))
    
    } catch (error) {
        console.log(error);
    }
}

export const loadingMedicines = () => (dispatch) => {
    dispatch({ type: LOADING_MEDICINES })

}

export const errorMedicines = (error) => (dispatch) => {
    dispatch({type: ERROR_MEDICINES, payload: error})
}


