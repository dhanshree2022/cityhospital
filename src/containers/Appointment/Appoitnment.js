import React from 'react';
import * as yup from 'yup';
import { useFormik } from 'formik';

function Appoitnment(props) {
    let d = new Date();
    let newdate = new Date();
    newdate.setDate(d.getDate() -1);

    let appointmentSchema = yup.object().shape({
        name: yup.string().
            required('Please enter name').
            matches(/^[a-zA-Z ]{2,30}$/,"Please enter valid name"),
        email: yup.string().
            email('Please enter valid email').
            required('Please enter email'),
        phone: yup.number().
            required('Please enter Phone Number')
            // .matches(/^[0-9]{10}$/,'Phone number must be 10 digits')
            ,
        date: yup.date().required('Please select date').
            min(newdate,'Please select future date'),
        department: yup.string().required('Please select at least one department'),
        message: yup.string().required('Please enter message').
        min(10,"Mininum 10 characters required").
        max(100,"Maximum 100 characters allowed")
        .matches(/^([A-Za-z]+ )+[A-Za-z]+$|^[A-Za-z]+$/,'single space between word')
        .matches(/^(\w+\s?){1,5}$/,'message must 5 words')
    });

    const formikObj = useFormik({
        initialValues: {
            name: '',
            email: '',
            phone: '',
            date:'',
            department:'',
            message: '',
        },
        onSubmit: values => {
            console.log(values);
        },
        validationSchema: appointmentSchema
    });

    const { handleSubmit, handleBlur, handleChange, errors, touched, values } = formikObj;

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
                    <form onSubmit={handleSubmit} method="post" role="form" className="php-email-form">
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
                                    values={values.name}
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
                                    values={values.email}
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
                                    values={values.phone}
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
                                    values={values.date}
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
                                    values={values.department}
                                >
                                    <option value>Select Department</option>
                                    <option value="Department 1">Department 1</option>
                                    <option value="Department 2">Department 2</option>
                                    <option value="Department 3">Department 3</option>
                                </select>
                                {errors.department && touched.department ? <span>{errors.department}</span> : null}

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
                                values={values.message}
                            />
                            {errors.message && touched.message ? <span>{errors.message}</span> : null}

                            <div className="validate" />
                        </div>
                        <div className="mb-3">
                            <div className="loading">Loading</div>
                            <div className="error-message" />
                            <div className="sent-message">Your appointment request has been sent successfully. Thank you!</div>
                        </div>
                        <div className="text-center"><button type="submit">Make an Appointment</button></div>
                    </form>
                </div>
            </section>
        </main>

    );
}

export default Appoitnment;