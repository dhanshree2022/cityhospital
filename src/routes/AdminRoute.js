import React from 'react';
import { Route, Routes } from 'react-router';
import Medicens from '../admin/containers/Medicines/Medicens';
import PrivateRoute from './PrivateRoute';
import Layout from '../admin/components/Layout/Layout';
import Doctors from '../admin/containers/Doctors/Doctors';
import Departments from '../admin/containers/Departments/Departments';

function AdminRoute(props) {
    return (
        <Layout>
            <Routes>
                <Route element={<PrivateRoute />}>
                    <Route path='/medicines' element={<Medicens />} />
                    <Route path='/doctors' element={<Doctors/>}/>
                    <Route path='/departments' element={<Departments/>}/>
                </Route>
            </Routes>
        </Layout>
    );
}

export default AdminRoute;