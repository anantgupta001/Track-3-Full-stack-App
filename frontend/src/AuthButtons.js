import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';

const AuthButtons = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/login');
    };

    return (
        <>
            {localStorage.getItem('token') ? (
                <>
                    <Button color="inherit" component={Link} to="/employees">Employees</Button>
                    <Button color="inherit" component={Link} to="/tasks">Tasks</Button>
                    <Button color="inherit" component={Link} to="/add-employee">Add Employee</Button>
                    <Button color="inherit" onClick={handleLogout}>Logout</Button>
                </>
            ) : (
                <>
                    <Button color="inherit" component={Link} to="/login">Login</Button>
                    <Button color="inherit" component={Link} to="/register">Register</Button>
                </>
            )}
        </>
    );
};

export default AuthButtons;
