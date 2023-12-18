import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { collection, addDoc, getDocs, doc, deleteDoc,updateDoc } from "firebase/firestore";
import { db } from "../../firebase";

const initialState = {
    isLoading: false,
    medicines: [],
    error: null
}

export const getMedicines = createAsyncThunk(
    'medicines/get',
    async () => {
        await new Promise((resolve, reject) => setTimeout(resolve, 2000))

        let data = [];
        const querySnapshot = await getDocs(collection(db, "medicines"), data);
        querySnapshot.forEach((doc) => {
            data.push({ id: doc.id, ...doc.data() })
            console.log(`${doc.id} => ${doc.data()}`);

        });


        // await new Promise((resolve, reject) => setTimeout(resolve, 2000))
        // let response = await getMedicinesData();
        // console.log(response.data);
        return data
    }
)

export const deleteMedicines = createAsyncThunk(
    'medicines/delete',
    async (id) => {
        await deleteDoc(doc(db, "medicines", id));

        // let response = await deleteMedicinesData(id);
        return id;
    }
)

export const addMedicines = createAsyncThunk(
    'medicines/post',
    async (data) => {
        console.log(data);
        try {
            const docRef = await addDoc(collection(db, "medicines"), data);
            console.log("Document written with ID: ", docRef.id);
            return { ...data, id: docRef.id };

        } catch (e) {
            console.error("Error adding document: ", e);
        }
        // let response = await addMedicinesData(data);
        // console.log(response.data);
        // return response.data;
    }
)

export const updateMedicines = createAsyncThunk(
    'medicines/put',
    async (data) => {
        const washingtonRef = doc(db, "medicines", data.id);
        await updateDoc(washingtonRef, {
            desc:data.desc,
            expiry:data.expiry,
            name:data.name,
            price: data.price
        });

        // let response = await updateMedicinesData(data);
        // console.log(response.data);
        return data;
    }
)

const onLoading = (state, action) => {

    state.action = true;
    state.error = null;
}

const onError = (state, action) => {
    state.action = true;
    state.error = action.error.message;
}

export const medicinesSlice = createSlice({
    name: 'medicines',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getMedicines.pending, onLoading);
        builder.addCase(getMedicines.fulfilled, (state, action) => {
            console.log(action);
            state.medicines = action.payload;
            state.error = null;
            state.isLoading = false;
        });
        builder.addCase(getMedicines.rejected, onError);


        builder.addCase(deleteMedicines.pending, onLoading);
        builder.addCase(deleteMedicines.fulfilled, (state, action) => {
            state.medicines = state.medicines.filter((v) => v.id !== action.payload)

        });
        builder.addCase(deleteMedicines.rejected, onError);

        builder.addCase(addMedicines.pending, onLoading);
        builder.addCase(addMedicines.fulfilled, (state, action) => {
            console.log(action);
            state.medicines = state.medicines.concat(action.payload)

        });
        builder.addCase(addMedicines.rejected, onError);

        builder.addCase(updateMedicines.pending, onLoading);
        builder.addCase(updateMedicines.fulfilled, (state, action) => {
            console.log(action);
            state.medicines = state.medicines.map((v) => {
                if (v.id === action.payload.id) {
                    return action.payload
                } else {
                    return v
                }
            })
        });
        builder.addCase(updateMedicines.rejected, onError);

    }
})

export default medicinesSlice.reducer