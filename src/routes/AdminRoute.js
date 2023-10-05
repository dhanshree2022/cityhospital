import React from 'react';
import { Route, Routes } from 'react-router';
import Medicens from '../admin/containers/Medicines/Medicens';
import PrivateRoute from './PrivateRoute';
import Layout from '../admin/components/Layout/Layout';

function AdminRoute(props) {
    return (
        <Layout>
            <Routes>
                <Route element={<PrivateRoute />}>
                    <Route path='/medicines' element={<Medicens />} />
                </Route>
            </Routes>
        </Layout>
    );
}

export default AdminRoute;