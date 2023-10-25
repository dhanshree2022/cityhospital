import React, { useEffect } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import * as yup from 'yup';
import { useFormik } from 'formik';

function DepartmentsForm({onhandlesubmit,updateData}) {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    useEffect(() => {

        if (updateData) {
            handleClickOpen();
            setValues(updateData);
        }

    }, [updateData])

    let deptSchema = yup.object().shape({
        name: yup.string().required('Please enter name').matches(/^[a-zA-Z ]{2,30}$/, "Please enter valid name"),
        short_desc: yup.string().required('Please enter description').
            min(20, "Mininum 20 words required").
            matches(/\S+/g,),
        long_desc: yup.string().required('Please enter description').
        min(20, "Mininum 20 words required").
        matches(/\S+/g,),
    });

    const formikObj = useFormik({
        initialValues: {
            name: '',
            short_desc: '',
            long_desc: '',
        },
        onSubmit: (values, action) => {
            onhandlesubmit(values);
            action.resetForm();
            handleClose();

        },
        validationSchema: deptSchema
    });


    const { handleSubmit, handleBlur, handleChange, errors, touched, values, setValues } = formikObj;


    return (
        <div>
            <Button variant="outlined" onClick={handleClickOpen}>
                Add Department
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle> Departments Information</DialogTitle>
                <DialogContent>

                    <TextField
                        margin="dense"
                        id="name"
                        label="Department Name"
                        type="name"
                        fullWidth
                        variant="standard"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.name}
                    />
                    {errors.name && touched.name ? <span>{errors.name}</span> : null}

                    <TextField
                        margin="dense"
                        id="short_desc"
                        label="Description"
                        type="short_desc"
                        fullWidth
                        variant="standard"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.short_desc}
                    />
                    {errors.short_desc && touched.short_desc ? <span>{errors.short_desc}</span> : null}

                    <TextField
                        margin="dense"
                        id="long_desc"
                        label="Lonf Description"
                        type="long_desc"
                        fullWidth
                        variant="standard"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.long_desc}
                    />
                    {errors.long_desc && touched.long_desc ? <span>{errors.long_desc}</span> : null}

                    
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleSubmit}>{updateData ? 'Update' : 'Add'}</Button>
                </DialogActions>
            </Dialog>

        </div>
    );
}

export default DepartmentsForm;