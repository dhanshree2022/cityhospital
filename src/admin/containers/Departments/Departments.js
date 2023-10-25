import React, { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import DepartmentsForm from './DepartmentsForm';
import { useDispatch, useSelector } from 'react-redux';
import { addDepartments, deleteDepartments, getDepartments, updateDepartments } from '../../../redux/action/departments.action';

function Departments(props) {
    const [update, setUpdate] = useState(false);
    const dispatch = useDispatch();
    const departments = useSelector(state=>state.departments);

    useEffect(() => {
        dispatch(getDepartments())
    }, [])

    const handleFormSubmit = (data) => {
        if(update){
            dispatch(updateDepartments(data))
        } else {
            dispatch(addDepartments(data))
        }

        setUpdate(false);
    }

    const handleEdit = (data) => {
        setUpdate(data)
    };


    const handleDelete = (id) => {
        dispatch(deleteDepartments(id));
    };


    const columns = [
        { field: 'name', headerName: 'Name', width: 130 },
        { field: 'short_desc', headerName: 'Short Description', width: 130 },
        { field: 'long_desc', headerName: 'Long Description', width: 130 },
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
            <DepartmentsForm onhandlesubmit={handleFormSubmit} updateData={update}/>

            <div style={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={departments.departments}
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

export default Departments;