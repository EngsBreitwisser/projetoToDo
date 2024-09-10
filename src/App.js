import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CssBaseline, Container } from '@mui/material';
import ListaTarefas from './components/TaskList';
import Login from './components/Login'; 
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <Router>
      <CssBaseline />
      <Container>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route 
            path="/" 
            element={
              <PrivateRoute>
                <ListaTarefas />
              </PrivateRoute>
            } 
          />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
