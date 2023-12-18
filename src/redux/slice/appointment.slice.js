import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { db, storage } from "../../firebase";
import { collection, addDoc, getDocs, doc, deleteDoc, updateDoc } from "firebase/firestore";
import { deleteObject, getDownloadURL, ref, uploadBytes } from "firebase/storage";

const initialState = {
    isLoading: false,
    appointment: [],
    error: null
}

export const addAppointment = createAsyncThunk(
    'appointment/post',
    async (data) => {
        console.log(data);
        let aptData = { ...data }
        let rNo = Math.floor(Math.random() * 10000);
        const storageRef = ref(storage, 'apt/' + rNo + '_' + data.pres.name);

        await uploadBytes(storageRef, data.pres).then(async (snapshot) => {
            console.log('Uploaded a blob or file!');
            await getDownloadURL((snapshot.ref))
                .then(async (url) => {
                    console.log(url);
                    let aptDoc = await addDoc(collection(db, "appointment"), { ...data, pres: url, pres_name: rNo + '_' + data.pres.name });
                    aptData.id = { id: aptDoc.id, ...data, pres: url, pres_name: rNo + '_' + data.pres.name };
                })
        })
        return aptData;

    }
)

export const deleteAppointment = createAsyncThunk(
    'appointment/delete',
    async (data) => {
        const aptRef = ref(storage, 'apt/' + data.pres_name);
        await deleteObject(aptRef).then(async () => {
            console.log("File deleted successfully");
            await deleteDoc(doc(db, "appointment", data.id));

        }).catch((error) => {
            console.log(error);
        });
        return data.id;
    }

)

export const getAppointment = createAsyncThunk(
    'appointment/get',
    async () => {

        await new Promise((resolve, reject) => setTimeout(resolve, 2000))

        let data = [];
        const querySnapshot = await getDocs(collection(db, "appointment"), data);
        querySnapshot.forEach((doc) => {
            data.push({ id: doc.id, ...doc.data() })
            console.log(`${doc.id} => ${doc.data()}`);

        });
        return data

    }
)

export const updateAppointment = createAsyncThunk(
    'appointment/put',
    async (data) => {
        let aptData = { ...data }
        if (typeof data.pres === 'string') {
            const aptRef = doc(db, "appointment", data.id);
            await updateDoc(aptRef, data);
            console.log("image not update");
        } else {
            const aptRef = ref(storage, 'apt/' + data.pres_name);
            await deleteObject(aptRef).then(async () => {
                console.log("Old File deleted successfully");
                // await deleteDoc(doc(db, "appointment", data.id));

                let rNo = Math.floor(Math.random() * 10000);
                const storageRef = ref(storage, 'apt/' + rNo + '_' + data.pres.name);

                await uploadBytes(storageRef, data.pres).then(async (snapshot) => {
                    console.log('New File Uploaded a blob or file!');
                    await getDownloadURL((snapshot.ref))
                        .then(async (url) => {
                            console.log(url);
                            const aptDocRef = doc(db, "appointment", data.id);
                            // await updateDoc(aptDocRef, { ...data, pres: url, pres_name: rNo + '_' + data.pres.name });
                            await updateDoc(aptDocRef, { ...data, pres: url, pres_name: rNo + '_' + data.pres.name });
                            aptData = { ...data, pres: url, pres_name: rNo + '_' + data.pres.name };
                        })
                })

            }).catch((error) => {
                console.log(error);
            });
        }
        return aptData;
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

export const appointmentSlice = createSlice({
    name: 'appointment',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getAppointment.pending, onLoading);
        builder.addCase(getAppointment.fulfilled, (state, action) => {
            console.log(action);
            state.appointment = action.payload;
            state.error = null;
            state.isLoading = false;
        });
        builder.addCase(getAppointment.rejected, onError);

        builder.addCase(deleteAppointment.pending, onLoading);
        builder.addCase(deleteAppointment.fulfilled, (state, action) => {
            state.appointment = state.appointment.filter((v) => v.id !== action.payload)
        });
        builder.addCase(deleteAppointment.rejected, onError);

        builder.addCase(addAppointment.pending, onLoading);
        builder.addCase(addAppointment.fulfilled, (state, action) => {
            console.log(action);
            state.appointment = state.appointment.concat(action.payload)

        });
        builder.addCase(addAppointment.rejected, onError);

        builder.addCase(updateAppointment.pending, onLoading);
        builder.addCase(updateAppointment.fulfilled, (state, action) => {
            state.appointment = state.appointment.map((v) => {
                if (v.id === action.payload.id) {
                    return action.payload;
                } else {
                    return v;
                }
            });

        });
        builder.addCase(updateAppointment.rejected, onError);

    }
})

export default appointmentSlice.reducer