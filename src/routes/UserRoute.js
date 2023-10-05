import React from 'react';
import { Route, Routes } from 'react-router';
import Home from '../containers/Home/Home';
import Department from '../containers/Department/Department';
import Doctors from '../containers/Doctors/Doctors';
import About from '../containers/About/About';
import Contact from '../containers/Contact/Contact';
import Appoitnment from '../containers/Appointment/Appoitnment';
import Auth from '../containers/Auth/Auth';
import Products from '../containers/Products/Products';
import PrivateRoute from './PrivateRoute';
import Dept from '../containers/Department/Dept';
import Reviews from '../containers/Reviews/Reviews';
import ReviewDetails from '../containers/Reviews/ReviewDetails';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Medicines from '../containers/Medicines/Medicines';
import MedicinesDetails from '../containers/Medicines/MedicinesDetails';


function UserRoute(props) {
    return (
        <>
            <Header />
                <Routes>
                    <Route exact path='/' element={<Home />} />
                    <Route exact path='/department' element={<Department />} />
                    <Route exact path='/department/:id' element={<Dept />} />
                    <Route exact path='/doctors' element={<Doctors />} />
                    <Route exact path='/about' element={<About />} />
                    <Route exact path='/contact' element={<Contact />} />
                    <Route element={<PrivateRoute />}>
                        <Route exact path='/appointment' element={<Appoitnment />} />
                    </Route>
                    <Route exact path='/auth' element={<Auth />} />
                    <Route exact path='/products' element={<Products />} />
                    <Route exact path='/reviews' element={<Reviews />} />
                    <Route exact path='/review-details/:id' element={<ReviewDetails />} />
                    <Route exact  path='/medicines' element={<Medicines/>}/>
                    <Route exact path='/medicines-details/:id' element={<MedicinesDetails/>}/>
                </Routes>
            <Footer />
        </>

    );
}

export default UserRoute;