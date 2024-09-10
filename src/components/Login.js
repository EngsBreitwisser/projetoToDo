import React from 'react';
import { Button, Typography, Box } from '@mui/material';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../firebaseConnection';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const login = () => {
    signInWithPopup(auth, new GoogleAuthProvider())
      .then(() => {
        navigate('/');
      })
      .catch(console.error);
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" height="100vh">
      <Typography variant="h4">Login</Typography>
      <Button variant="contained" onClick={login}>Login com Google</Button>
    </Box>
  );
};

export default Login;
