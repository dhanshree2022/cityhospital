import React, { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import MedicensForm from './MedicensForm';
import { GET_MEDICINES } from '../../../redux/Action.types';
import { useDispatch, useSelector } from 'react-redux';
import { addMedicines, deleteMedicines, getMedicines, updateMedicines } from '../../../redux/slice/medicines.slice';

function Medicens() {
    const [update, setUpdate] = useState(false);
    const dispatch = useDispatch();
    const medicines = useSelector(state=>state.medicines);
    

    useEffect(() => {
        dispatch(getMedicines());   
    }, [])

    const handleFormSubmit = (data) => {
        if(update){
            dispatch(updateMedicines(data))
        } else {
            dispatch(addMedicines(data))
        }

        setUpdate(false);
    }

    const handleEdit = (data) => {
        setUpdate(data)
    };


    const handleDelete = (id) => {
        
       dispatch(deleteMedicines(id));
    };


    const columns = [
        { field: 'name', headerName: 'Name', width: 130 },
        { field: 'desc', headerName: 'Description', width: 130 },
        { field: 'expiry', headerName: 'Expiry', width: 130 },
        { field: 'price', headerName: 'Price', width: 130 },
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
            <MedicensForm onhandlesubmit={handleFormSubmit} updateData={update}/>

            <div style={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={medicines.medicines}
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

export default Medicens;