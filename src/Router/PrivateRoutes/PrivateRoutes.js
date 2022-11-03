import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';

const PrivateRoutes = ({ children }) => {

    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return <h2 className='text-5xl'>Loading......</h2>
    }
    if (user) {
        return children;
    }

    else return <Navigate to='/login' state={{ from: location }} replace></Navigate>

};

export default PrivateRoutes;