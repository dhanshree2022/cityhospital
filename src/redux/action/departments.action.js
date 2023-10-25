import { API_URL } from "../../utils/baseUrl";
import { ADD_DEPARTMENTS, DELETE_DEPARTMENTS, GET_DEPARTMENTS, UPDATE_DEPARTMENTS } from "../Action.types";

export const getDepartments = () => (dispatch) =>{
    // console.log("hello");
    try{
        fetch(API_URL + "departments")
        .then((response)=>response.json())
        .then((data)=>dispatch({type:GET_DEPARTMENTS,payload:data}));
    } catch (error){
        console.log(error)
    }
}

export const deleteDepartments = (id) => (dispatch) => {
    try{
        fetch(API_URL + "departments/"+id,{method:'DELETE'})
        .then(dispatch({type:DELETE_DEPARTMENTS,payload:id}))
    }catch (error){
        console.log(error)
    }
} 

export const addDepartments = (data) => (dispatch)=> {
    try{
        fetch(API_URL +"departments",
        {
            method:'POST',
            headers: {
                "Content-Type": "application/json",
              },
            body:JSON.stringify(data),
            
        }
        )
        .then((response)=>response.json())
        .then((rdata)=>dispatch({type:ADD_DEPARTMENTS,payload:rdata}))
        .catch((error)=> console.log(error))

    } catch (error) { 
        console.log(error);
    }
}

export const updateDepartments = (data) => (dispatch)=> {
    try{
        fetch(API_URL +"departments/" + data.id,
        {
            method:'PUT',
            headers: {
                "Content-Type": "application/json",
              },
            body:JSON.stringify(data),
            
        }
        )
        .then((response)=>response.json())
        .then((rdata)=>dispatch({type:UPDATE_DEPARTMENTS,payload:rdata}))
        .catch((error)=> console.log(error))

    } catch (error) { 
        console.log(error);
    }
}