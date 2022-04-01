import React from 'react'
import { useState } from 'react'
import { Redirect } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { useEffect } from 'react/cjs/react.production.min';
import { useUserAuth } from '../context/UserAuthContextProvider';
import { auth } from '../database/firebase.config';

const ProtectedRoute = ({ Children }) => {

  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [loading, setLoading] = useState(true);

  const loadData = async () => {
    await auth.onAuthStateChanged((currentUser) => {
      setIsLoggedIn(currentUser);
      setLoading(false);
      console.log("current user", currentUser);
      console.log("running");
    });
  }

  useEffect(() => {
    loadData();
  }, [])

  if (!isLoggedIn && !loading) {
    return <Redirect to={"/login"} />
  }else if(loading && !isLoggedIn){
    return "loading..."
  }else if(isLoggedIn){
    return Children
  }else {
    return "......."
  }


}

export default ProtectedRoute