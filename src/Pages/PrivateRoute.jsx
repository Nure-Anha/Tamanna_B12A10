import React, { useContext } from 'react';
import { AuthContext } from './Authentication/Auth/AuthContext';
import { Navigate } from 'react-router';

const PrivateRoute = ({children}) => {
    const {user , Loading} = useContext(AuthContext) ;

    if(Loading) {
        return <span className="loading loading-bars loading-xl ml-170"></span>
    }
    

    if(user) {
        return children ;
    }
    else {
        return <Navigate state={location?.pathname} to={'/login'}></Navigate>
    }
};

export default PrivateRoute;