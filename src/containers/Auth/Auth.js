import React, { useState } from 'react';
import { NavLink, Navigate, useNavigate } from 'react-router-dom';
import Button from '../../components/UI/Button/Button';
import * as yup from 'yup';
import { useFormik } from 'formik';
import InputBox from '../../components/UI/InputBox/InputBox';
import { forgotRequest, signinRequest, signupRequest } from '../../redux/action/auth.action';
import { useDispatch } from 'react-redux';

function Auth(props) {
    const [type, setType] = useState('login');
    const dispatch = useDispatch();

    const navigate = useNavigate();
    let authObj, initVal;
    if (type === 'login') {
        authObj = {
            email: yup.string().email().required(),
            password: yup.string().required()
        }
        initVal = {
            email: '',
            password: ''
        }
    } else if (type === 'signup') {
        authObj = {
            name: yup.string().required(),
            email: yup.string().email().required(),
            password: yup.string().required(),
            con_password: yup.string().required().test("con_password", "Not same password", function (val) {
                if (val === this.parent.password) {
                    return true
                } else {
                    return false
                }
            })
        }
        initVal = {
            name: '',
            email: '',
            password: '',
            con_password: ''
        }
    } else {
        authObj = {
            email: yup.string().email().required()
        }
        initVal = {
            email: ''
        }
    }

    let authSchema = yup.object().shape(authObj);

    const handleSignup = (data) => {
        dispatch(signupRequest(data));
    }

    const handleSignin = (data) => {
        dispatch(signinRequest(
            {
                data: data,
                callback: (route)=> {
                    navigate(route)
                }
            }));
    }

    const handleForgot = (data) => {
        console.log(data);
        dispatch(forgotRequest(data));
    }

    const formikObj = useFormik({
        initialValues: initVal,
        onSubmit: values => {
            if (type === 'login') {
                handleSignin(values);

            } else if (type === 'signup') {
                handleSignup(values);
            } else if (type === 'forgot') {
                handleForgot(values)
            }
        },
        enableReinitialize: true,
        validationSchema: authSchema
    });

    const { handleSubmit, handleChange, handleBlur, errors, values, touched } = formikObj;
    console.log(errors, values);
    return (
        <main>
            <section id="appointment" className="appointment">
                <div className="container">
                    <div className="section-title">
                        {
                            type === 'login' ? <h2> Login </h2> : type === 'signup' ? <h2> Signup </h2> : <h2> Forgot Password </h2>

                        }
                    </div>

                    <form onSubmit={handleSubmit} role="form" className="php-email-form">
                        <div className="row justify-content-center">
                            {
                                type === 'signup' ?
                                    <div className="col-md-8 form-group">
                                        <InputBox
                                            type="text"
                                            name="name"
                                            className="form-control"
                                            id="name"
                                            placeholder="Your Name"
                                            value={values.name}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            errorText={errors.name && touched.name ? errors.name : ''}
                                        />
                                        {/* {errors.name && touched.name ? <span>{errors.name}</span> : null} */}
                                    </div>
                                    : null

                            }

                            <div className="col-md-8 form-group mt-3 mt-md-0">
                                <InputBox type="email"
                                    className="form-control"
                                    name="email"
                                    id="email"
                                    placeholder="Your Email"
                                    value={values.email}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    errorText={errors.email && touched.email ? errors.email : ''}

                                />
                                {/* {errors.email && touched.email ? <span>{errors.email}</span> : null} */}

                            </div>

                            {
                                type === 'login' || type === 'signup' ?
                                    <div className="col-md-8 form-group mt-3 mt-md-0">
                                        <InputBox
                                            type="password"
                                            className="form-control"
                                            name="password"
                                            id="password"
                                            placeholder="Your Password"
                                            value={values.password}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            errorText={errors.password && touched.password ? errors.password : ''}

                                        />
                                        {/* {errors.password && touched.password ? <span>{errors.password}</span> : null} */}

                                    </div>
                                    : null
                            }

                            {
                                type === 'signup' ?
                                    <div className="col-md-8 form-group mt-3 mt-md-0">
                                        <InputBox
                                            type="password"
                                            className="form-control"
                                            name="con_password"
                                            id="con_password"
                                            placeholder="Your Confirm Password"
                                            value={values.con_password}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            errorText={errors.con_password && touched.con_password ? errors.con_password : ''}

                                        />
                                        {/* {errors.con_password && touched.con_password ? <span>{errors.con_password}</span> : null} */}

                                    </div>
                                    : null

                            }

                            <div className="col-md-8 form-group mt-3 mt-md-0">
                                {
                                    type === 'login' ? <NavLink type="submit" onClick={() => setType('forgot')}>Forgot Password?</NavLink> : null
                                }

                            </div>

                        </div>


                        <div className="text-center">
                            {/* {
                                type === 'login' ? <Button btnType='primary' type="submit" disabled={true}>Login</Button> :
                                    type === 'signup' ? <Button btnDisabled={true} btnType='secondary' type="submit" >Signup</Button> :
                                        <Button type="submit" btnDisabled={true} btnType='outline'>Submit</Button>
                            } */}

                            {
                                type === 'login' ? <Button btnType='primary' type="submit">Login</Button> :
                                    type === 'signup' ? <Button btnType='secondary' type="submit" >Signup</Button> :
                                        <Button type="submit" btnType='outline'>Submit</Button>
                            }
                        </div>

                    </form>
                    <div className="text-center">

                        {
                            type === 'login' ?
                                <span> Create Account? <NavLink type="submit" onClick={() => setType('signup')}>Signup</NavLink></span>
                                :
                                <span> Alearedy have an account? <NavLink type="submit" onClick={() => setType('login')}>Login</NavLink></span>

                        }
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Auth;