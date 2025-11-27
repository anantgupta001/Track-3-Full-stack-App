import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, Button, Box } from '@mui/material';

function Home() {
  return (
    <Box sx={{ my: 4, textAlign: 'center' }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Employee & Task Management
      </Typography>
      <Typography variant="body1" paragraph>
        Welcome to your management dashboard. Please select an option:
      </Typography>
      <Box sx={{ mt: 3, display: 'flex', justifyContent: 'center', gap: 2 }}>
        <Button variant="contained" component={Link} to="/employees">
          Manage Employees
        </Button>
        <Button variant="contained" component={Link} to="/tasks">
          Manage Tasks
        </Button>
      </Box>
    </Box>
  );
}

export default Home;
