import React, { useEffect } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import * as yup from 'yup';
import { useFormik } from 'formik';

function MedicensForm({onhandlesubmit,updateData}) {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    useEffect(()=>{
        
        if(updateData){
            handleClickOpen();
        setValues(updateData);
        }

    },[updateData])
    
    let medSchema = yup.object().shape({
        name: yup.string().required('Please enter name').matches(/^[a-zA-Z ]{2,30}$/, "Please enter valid name"),
        desc: yup.string().required('Please enter message').
            min(10, "Mininum 10 characters required").
            max(100, "Maximum 100 characters allowed"),
        expiry: yup.string().required('please enter expiary date'),
        price: yup.string().required('please enter price')
    });

    const formikObj = useFormik({
        initialValues: {
            name: '',
            desc: '',
            expiry: '',
            price: '',
        },
        onSubmit: (values,action) => {
            onhandlesubmit(values);
            action.resetForm();
            handleClose();
        },
        validationSchema: medSchema
    });

    const { handleSubmit, handleBlur, handleChange, errors, touched, values, setValues } = formikObj;
    return (
        <>
            <Button variant="outlined" onClick={handleClickOpen}>
                Add Medicines
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Medicens</DialogTitle>
                <DialogContent >
                    <TextField
                        margin="dense"
                        id="name"
                        label="Medicines Name"
                        type="text"
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
                        type="text"
                        fullWidth
                        variant="standard"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.desc}
                    />
                    {errors.desc && touched.desc ? <span>{errors.desc}</span> : null}

                    <TextField
                        margin="dense"
                        id="expiry"
                        label="Expiry"
                        type="date"
                        fullWidth
                        variant="standard"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.expiry}
                    />
                    {errors.expiry && touched.expiry ? <span>{errors.expiry}</span> : null}


                    <TextField
                        margin="dense"
                        id="price"
                        label="Price"
                        type="text"
                        fullWidth
                        variant="standard"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.price}
                    />
                    {errors.price && touched.price ? <span>{errors.price}</span> : null}
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleSubmit}> {updateData ? 'Update' : 'Add'}</Button>
                </DialogActions>
            </Dialog>

        </>
    );
}

export default MedicensForm;