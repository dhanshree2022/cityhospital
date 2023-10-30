import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDoctor } from '../../redux/action/doctor.action';

function Doctors(props) {
    const dispatch = useDispatch();
    const doctor = useSelector(state => state.doctor,);
    console.log(doctor.doctor);

    useEffect(() => {
        dispatch(getDoctor());
    }, [])

    return (
        <main>
            <section id="doctors" className="doctors">
                <div className="container">
                    <div className="section-title">
                        <h2>Doctors</h2>
                        <p>Duis sagittis rutrum neque, quis tincidunt arcu pretium ac. Suspendisse sem risus, molestie vitae arcu et,
                            tincidunt viverra erat. Quisque in lectus id nulla viverra sodales in a risus. Aliquam ut sem ex. Duis viverra
                            ipsum lacus, ut pharetra arcu sagittis nec. Phasellus a eleifend elit.</p>
                    </div>
                    <div className="row">
                        {
                            doctor.doctor.map((v) => {
                                return (
                                    <div className="col-lg-6">

                                        <div className="member d-flex align-items-start">

                                            <div className="member-info">

                                                <div className="col-lg-6 mt-4 ">

                                                    <h4>{v.name}</h4>
                                                    <p>{v.desc}</p>
                                                    <p>{v.desg}</p>
                                                    <p>{v.url}</p>
                                                </div>
                                                <div className="social">
                                                    <a href><i className="ri-twitter-fill" /></a>
                                                    <a href><i className="ri-facebook-fill" /></a>
                                                    <a href><i className="ri-instagram-fill" /></a>
                                                    <a href> <i className="ri-linkedin-box-fill" /> </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
        </main>

    );
}

export default Doctors;