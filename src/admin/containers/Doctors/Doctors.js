import React, { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import DoctorsForm from './DoctorsForm';
import { useDispatch, useSelector } from 'react-redux';
import { addDoctor, deleteDoctor, getDoctor, updateDoctor } from '../../../redux/action/doctor.action';

function Doctors(props) {
    const [update, setUpdate] = useState(false);
    const dispatch = useDispatch();
    const doctor = useSelector(state=>state.doctor)

    useEffect(() => {
        dispatch(getDoctor());
        // let localData = JSON.parse(localStorage.getItem("doctors"));
        // if (localData) {
        //     setDocData(localData);
        // }
    }, [])

    const handleFormSubmit = (data) => {
        if(update){
            dispatch(updateDoctor(data))
        } else {
            dispatch(addDoctor(data))
        }
        setUpdate(false);
        // let localData = JSON.parse(localStorage.getItem("doctors"));
        // let id = Math.floor(Math.random() * 1000);

        // if (localData) {
        //     if (update) {
        //         let index = localData.findIndex((v) => v.id == data.id);

        //         localData[index] = data;
        //         localStorage.setItem('doctors', JSON.stringify(localData));
        //         setDocData(localData);
        //         setUpdate(false);
        //     } else {
        //         localData.push({ id: id, ...data });
        //         localStorage.setItem("doctors", JSON.stringify(localData));
        //         setDocData(localData)
        //     }
        // } else {
        //     localStorage.setItem("doctors", JSON.stringify([{ id, ...data }]));
        //     setDocData([{ id, ...data }])
        // }

    }

    const handleEdit = (data) => {
        setUpdate(data)
    };


    const handleDelete = (id) => {
        dispatch(deleteDoctor(id));
        // let localData = JSON.parse(localStorage.getItem("doctors"));
        // const updateData = mData.filter((v) => v.id !== id);
        // localStorage.setItem('doctors', JSON.stringify(localData));
        // setDocData(updateData);
    };


    const columns = [
        { field: 'name', headerName: 'Name', width: 130 },
        { field: 'desc', headerName: 'Description', width: 130 },
        { field: 'desg', headerName: 'Desgination', width: 130 },
        { field: 'url', headerName: 'Facebook Profile', width: 130 },
        {
            field: 'actions', headerName: 'Actions', width: 130,
            renderCell: (params) => (
                <>
                    <EditIcon
                        variant="contained"
                        color="primary"
                        onClick={() => handleEdit(params.row)}
                    >
                        Edit
                    </EditIcon>

                    <DeleteIcon
                        variant="contained"
                        color="error"
                        onClick={() => handleDelete(params.row.id)}
                    >
                        Delete
                    </DeleteIcon>
                </>
            ),
        },
    ];

    return (
        <div>
            <DoctorsForm onhandlesubmit={handleFormSubmit} updateData={update}/>

            <div style={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={doctor.doctor}
                    columns={columns}
                    initialState={{
                        pagination: {
                            paginationModel: { page: 0, pageSize: 5 },
                        },
                    }}
                    pageSizeOptions={[5, 10]}
                    checkboxSelection
                />
            </div>
        </div>
    );
}

export default Doctors;