import React from 'react';
import { Navigate, Outlet } from 'react-router';

function PrivateRoute(props) {
    let auth = true;
    return (
        auth ? <Outlet/> : <Navigate to={"/auth"} replace/>
    );
}

export default PrivateRoute;