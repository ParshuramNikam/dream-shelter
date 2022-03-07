import React from 'react'
import { useState } from 'react'
import { Redirect } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ Children }) => {

    const [isLoggedIn, setIsLoggedIn] = useState(true);

    if (!isLoggedIn) {
        return <Redirect to={"/login"} />
    }

    return Children
}

export default ProtectedRoute