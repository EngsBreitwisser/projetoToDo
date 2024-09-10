// components/PrivateRoute.js
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate } from 'react-router-dom';
import { auth } from '../firebaseConnection';

const PrivateRoute = ({ children }) => {
  const [user, loading] = useAuthState(auth); 

  if (loading) return <p>Carregando...</p>;

  return user ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
