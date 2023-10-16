import React, { useEffect } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import * as yup from 'yup';
import { useFormik } from 'formik';

function DoctorsForm({onhandlesubmit,updateData}) {
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

    let docSchema = yup.object().shape({
        name: yup.string().required('Please enter name').matches(/^[a-zA-Z ]{2,30}$/, "Please enter valid name"),
        desc: yup.string().required('Please enter description').
            min(20, "Mininum 20 words required").
            matches(/\S+/g,),
        desg: yup.string().required('please enter designation').matches(/^[a-zA-Z ]{2,30}$/, "Please enter valid designation"),
        url: yup.string().required('please enter url').matches(/^((ftp|http|https):\/\/)?www\.([A-z]+)\.([A-z]{2,})/, "please enter valid url")
    });

    const formikObj = useFormik({
        initialValues: {
            name: '',
            desc: '',
            desg: '',
            url: '',
        },
        onSubmit: (values, action) => {
            onhandlesubmit(values);
            action.resetForm();
            handleClose();

        },
        validationSchema: docSchema
    });


    const { handleSubmit, handleBlur, handleChange, errors, touched, values, setValues } = formikObj;

    return (
        <div>
            <Button variant="outlined" onClick={handleClickOpen}>
                Add Doctor
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle> Doctors Information</DialogTitle>
                <DialogContent>

                    <TextField
                        margin="dense"
                        id="name"
                        label="Doctor Name"
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
                        id="desc"
                        label="Description"
                        type="desc"
                        fullWidth
                        variant="standard"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.desc}
                    />
                    {errors.desc && touched.desc ? <span>{errors.desc}</span> : null}

                    <TextField
                        margin="dense"
                        id="desg"
                        label="Doctor Designation"
                        type="desg"
                        fullWidth
                        variant="standard"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.desg}
                    />
                    {errors.desg && touched.desg ? <span>{errors.desg}</span> : null}

                    <TextField
                        margin="dense"
                        id="url"
                        label="Facebook Profile"
                        type="url"
                        fullWidth
                        variant="standard"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.url}
                    />
                    {errors.url && touched.url ? <span>{errors.url}</span> : null}

                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleSubmit}>{updateData ? 'Update' : 'Add'}</Button>
                </DialogActions>
            </Dialog>

        </div>
    );
}

export default DoctorsForm;