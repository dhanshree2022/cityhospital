import React, { useEffect, useState } from 'react';
import * as yup from 'yup';
import { useFormik } from 'formik';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch, useSelector } from 'react-redux';
import { addAppointment, deleteAppointment, getAppointment, updateAppointment } from '../../redux/slice/appointment.slice';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

function Appoitnment(props) {
    const [update, setUpdate] = useState(false);
    const dispatch = useDispatch();
    let appointment = useSelector(state => state.appointment);
    console.log(appointment);

    const [value, setValue] = React.useState('1');

    const handleChange1 = (event, newValue) => {
        setValue(newValue);
    };

    useEffect(() => {
        dispatch(getAppointment());
    }, [dispatch])

    const handleEdit = (data) => {   
        setValue("1")
        setValues(data)
        setUpdate(data)
    };
    const handleDelete = (data) => {
        dispatch(deleteAppointment(data))
    };

    let d = new Date();
    let newdate = new Date();
    newdate.setDate(d.getDate() - 1);

    let appointmentSchema = yup.object().shape({
        name: yup.string().
            required('Please enter name').
            matches(/^[a-zA-Z ]{2,30}$/, "Please enter valid name"),
        email: yup.string().
            email('Please enter valid email').
            required('Please enter email'),
        phone: yup.number().
            required('Please enter Phone Number'),
        date: yup.date().required('Please select date').
            min(newdate, 'Please select future date'),
        department: yup.string().required('Please select at least one department'),
        pres: yup.mixed().required('Please select an image'),
        message: yup.string().required('Please enter message').
            min(10, "Mininum 10 characters required").
            max(100, "Maximum 100 characters allowed")
            .matches(/^([A-Za-z]+ )+[A-Za-z]+$|^[A-Za-z]+$/, 'single space between word')
            .matches(/^(\w+\s?){1,5}$/, 'message must 5 words')
    });

    const formikObj = useFormik({
        initialValues: {
            name: '',
            email: '',
            phone: '',
            date: '',
            department: '',
            pres: '',
            message: '',
        },
        onSubmit: (values) => {
            console.log(values);
            let arr = values.message.split(" ");
            let newarr = arr.map((v) => {
                return v[0].toUpperCase() + v.substring(1)
            })
            // console.log(newarr);
            let joinarr = newarr.join(" ");

            if (update) {
                dispatch(updateAppointment(values))
                setUpdate(true)
            } else {
                dispatch(addAppointment(values))
            }
            setValue('2')
        },
        validationSchema: appointmentSchema
    });

    const { handleSubmit, handleBlur, handleChange, setFieldValue, setValues, errors, touched, values } = formikObj;

    return (
        <main>
            <section id="appointment" className="appointment">
                <div className="container">
                    <div className="section-title">
                        <h2>Make an Appointment</h2>
                        <p>Aenean enim orci, suscipit vitae sodales ac, semper in ex. Nunc aliquam eget nibh eu euismod. Donec dapibus
                            blandit quam volutpat sollicitudin. Fusce tincidunt sit amet ex in volutpat. Donec lacinia finibus tortor.
                            Curabitur luctus eleifend odio. Phasellus placerat mi et suscipit pulvinar.</p>
                    </div>
                    <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
                        <Tabs value={value} onChange={handleChange1} centered>
                            <Tab label="Book Appointment" value='1' />
                            <Tab label="List Appointment" value='2' />
                        </Tabs>
                    </Box>

                    {value === '1' ?
                        <>
                            <form onSubmit={handleSubmit} updateData={update} method="post" role="form" className="php-email-form">
                                <div className="row">
                                    <div className="col-md-4 form-group">
                                        <input
                                            type="text"
                                            name="name"
                                            className="form-control"
                                            id="name"
                                            placeholder="Your Name"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.name}
                                        />
                                        {errors.name && touched.name ? <span>{errors.name}</span> : null}

                                        <div className="validate" />
                                    </div>
                                    <div className="col-md-4 form-group mt-3 mt-md-0">
                                        <input
                                            type="email"
                                            className="form-control"
                                            name="email"
                                            id="email"
                                            placeholder="Your Email"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.email}
                                        />
                                        {errors.email && touched.email ? <span>{errors.email}</span> : null}

                                        <div className="validate" />
                                    </div>
                                    <div className="col-md-4 form-group mt-3 mt-md-0">
                                        <input
                                            type="tel"
                                            className="form-control"
                                            name="phone"
                                            id="phone"
                                            placeholder="Your Phone"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.phone}
                                        />
                                        {errors.phone && touched.phone ? <span>{errors.phone}</span> : null}

                                        <div className="validate" />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-4 form-group mt-3">
                                        <input
                                            type="date"
                                            name="date"
                                            className="form-control datepicker"
                                            id="date"
                                            placeholder="Appointment Date"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.date}
                                        />
                                        {errors.date && touched.date ? <span>{errors.date}</span> : null}

                                        <div className="validate" />
                                    </div>
                                    <div className="col-md-4 form-group mt-3">
                                        <select
                                            name="department"
                                            id="department"
                                            className="form-select"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.department}
                                        >
                                            <option value>Select Department</option>
                                            <option value="Department 1">Department 1</option>
                                            <option value="Department 2">Department 2</option>
                                            <option value="Department 3">Department 3</option>
                                        </select>
                                        {errors.department && touched.department ? <span>{errors.department}</span> : null}

                                        <div className="validate" />
                                    </div>
                                    <div className="col-md-4 form-group mt-3">
                                        <input
                                            type="file"
                                            name="pres"
                                            className="form-control datepicker"
                                            id="pres"
                                            onChange={(event) => setFieldValue("pres", event.target.files[0])}
                                            onBlur={handleBlur}
                                        />
                                        <img
                                        width={'50px'}
                                        height={'50px'}
                                            src={typeof values.pres === 'string' ? values.pres : URL.createObjectURL(values.pres)}
                                        />
                                        
                                        {errors.pres && touched.pres ? <span>{errors.pres}</span> : null}

                                        <div className="validate" />
                                    </div>
                                </div>
                                <div className="form-group mt-3">
                                    <textarea
                                        className="form-control"
                                        name="message"
                                        rows={5}
                                        placeholder="Message (Optional)"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.message}
                                    />
                                    {errors.message && touched.message ? <span>{errors.message}</span> : null}

                                    <div className="validate" />
                                </div>
                                <div className="mb-3">
                                    <div className="loading">Loading</div>
                                    <div className="error-message" />
                                    <div className="sent-message">Your appointment request has been sent successfully. Thank you!</div>
                                </div>
                                <div className="text-center"><button type="submit">{update ? 'Update an Appointment' : 'Make an Appointment' }</button></div>
                            </form>
                        </>
                        :
                        <>
                            <h1>List of Appointment</h1>
                            {
                                appointment.appointment ?
                                    <div className='row'>
                                        {
                                            appointment.appointment.map((v, i) => {
                                                return (
                                                    <div className='col-md-3'>
                                                        <img src={v.pres} style={{ width: '100px', height: '100px' }} />
                                                        <p>Name: {v.name}</p>
                                                        <p>Date: {v.date}</p>
                                                        <p>Department: {v.department}</p>
                                                        <EditIcon variant="contained" color="primary" onClick={() => handleEdit(v)}>Edit</EditIcon>
                                                        <DeleteIcon variant="contained" color="error" onClick={() => handleDelete(v)}>Delete</DeleteIcon>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div> 
                                :   null
                            }
                        </>
                    }
                </div>
            </section>
        </main>

    );
}

export default Appoitnment;