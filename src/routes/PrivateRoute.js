import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router';

function PrivateRoute(props) {
    let auth = useSelector(state=>state.auth);
    return (
        auth.user ? <Outlet/> : <Navigate to={"/auth"} replace/>
    );
}

export default PrivateRoute;