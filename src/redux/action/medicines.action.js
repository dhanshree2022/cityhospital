import { API_URL } from "../../utils/baseUrl"
import { ADD_MEDICNES, DELETE_MEDICINES, ERROR_MEDICINES, GET_MEDICINES, LOADING_MEDICINES, UPDATE_MEDICINES } from "../Action.types"


export const getMedicines = () => (dispatch) => {
    try {
        dispatch(loadingMedicines())
        setTimeout(() => {
            fetch(API_URL + "medicines")
                .then(response => {
                    if (response.ok) {
                        return response.json();
                    }
                    throw new Error("Something wet wrong!");
                })
                .then((data) => dispatch({ type: GET_MEDICINES, payload: data }))
                .catch((error) => dispatch(errorMedicines(error.message)))
        }, 4000);
    } catch (error) {
        console.log(error);
    }
}

export const deleteMedicines = (id) => (dispatch) => {
    try {
        fetch(API_URL + "medicines/" + id, { method: 'DELETE' })
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error('Something wet wrong!');
            })
            .then(dispatch({ type: DELETE_MEDICINES, payload: id }))
            .catch((error) => dispatch(errorMedicines(error.message)))
    } catch (error) {
        console.log(error)
    }
}

export const addMedicines = (data) => (dispatch) => {
    try {
        fetch(API_URL + "medicines",
            {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            }
        )
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error('Something wet wrong!');
            })
            .then((rdata) => dispatch({ type: ADD_MEDICNES, payload: rdata }))
            .catch((error) => dispatch(errorMedicines(error.message)))
    } catch (error) {
        console.log(error);
    }
}

export const updateMedicines = (data) => (dispatch) => {
    try {
        fetch(API_URL + "medicines/" + data.id,
            {
                method: 'PUT',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),

            }
        )
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error('Something wet wrong!');
            })
            .then((rdata) => dispatch({ type: UPDATE_MEDICINES, payload: rdata }))
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


