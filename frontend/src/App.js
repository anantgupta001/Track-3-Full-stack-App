import React from 'react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import Home from './Home';
import EmployeeList from './EmployeeList';
import TaskList from './TaskList';
import AddEmployee from './AddEmployee';
import Login from './Login';
import Register from './Register';
import Protected from './Protected';
import { AppBar, Toolbar, Typography, Button, Container, Box } from '@mui/material';

function App() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Employee & Task Management
          </Typography>
          <Button color="inherit" component={Link} to="/">Home</Button>
          {localStorage.getItem('token') && (
            <>
              <Button color="inherit" component={Link} to="/employees">Employees</Button>
              <Button color="inherit" component={Link} to="/tasks">Tasks</Button>
              <Button color="inherit" component={Link} to="/add-employee">Add Employee</Button>
              <Button color="inherit" onClick={handleLogout}>Logout</Button>
            </>
          )}
          {!localStorage.getItem('token') && (
            <>
              <Button color="inherit" component={Link} to="/login">Login</Button>
              <Button color="inherit" component={Link} to="/register">Register</Button>
            </>
          )}
        </Toolbar>
      </AppBar>
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Box>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/employees" element={<Protected><EmployeeList /></Protected>} />
            <Route path="/tasks" element={<Protected><TaskList /></Protected>} />
            <Route path="/add-employee" element={<Protected><AddEmployee /></Protected>} />
          </Routes>
        </Box>
      </Container>
    </>
  );
}

export default App;
