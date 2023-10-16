import React, { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import MedicensForm from './MedicensForm';

function Medicens() {
    const [mData, setMData] = useState([]);
    const [update, setUpdate] = useState(false);

    useEffect(() => {
        let localData = JSON.parse(localStorage.getItem("medicines"));
        if (localData) {
            setMData(localData);
        }
    }, [])

    const handleFormSubmit = (data) => {
        let localData = JSON.parse(localStorage.getItem("medicines"));
        let id = Math.floor(Math.random() * 1000);

        if (localData) {
            if (update) {
                let index = localData.findIndex((v) => v.id == data.id);

                localData[index] = data;
                localStorage.setItem('medicines', JSON.stringify(localData));
                setMData(localData);
                setUpdate(false);
            } else {
                localData.push({ id: id, ...data });
                localStorage.setItem("medicines", JSON.stringify(localData));
                setMData(localData)
            }
        } else {
            localStorage.setItem("medicines", JSON.stringify([{ id, ...data }]));
            setMData([{ id, ...data }])
        }

    }

    const handleEdit = (data) => {
        setUpdate(data)
    };


    const handleDelete = (id) => {
        let localData = JSON.parse(localStorage.getItem("medicines"));
        const updateData = mData.filter((v) => v.id !== id);
        localStorage.setItem('medicines', JSON.stringify(localData));
        setMData(updateData);
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
                    rows={mData}
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