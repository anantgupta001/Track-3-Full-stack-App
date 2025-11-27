import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Typography, Box, List, ListItem, ListItemText, ListItemSecondaryAction, IconButton, Paper, TextField, Button } from '@mui/material';

const AddEmployee = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      await axios.post(`${process.env.REACT_APP_API_URL}/api/employees`, { name, email, role }, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      navigate('/employees'); // Redirect to employees list after adding
    } catch (error) {
      console.error('Error adding employee:', error);
    }
  };

  return (
    <Box sx={{ mt: 4, display: 'flex', justifyContent: 'center' }}>
      <Paper elevation={3} sx={{ p: 4, width: '100%', maxWidth: 500 }}>
        <Typography variant="h5" component="h2" gutterBottom>
          Add New Employee
        </Typography>
        <form onSubmit={handleSubmit} style={{ marginTop: '16px' }}>
          <TextField
            fullWidth
            label="Name"
            variant="outlined"
            margin="normal"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <TextField
            fullWidth
            label="Email"
            variant="outlined"
            margin="normal"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <TextField
            fullWidth
            label="Role"
            variant="outlined"
            margin="normal"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            required
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{ mt: 3, mb: 2 }}
          >
            Add Employee
          </Button>
        </form>
      </Paper>
    </Box>
  );
};

export default AddEmployee;
