import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Box, Typography } from '@mui/material';

function AddTaskForm({ employeeId, onTaskAdded }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      await axios.post(`${process.env.REACT_APP_API_URL}/api/tasks`, {
        title,
        description,
        dueDate,
        employeeId: employeeId,
      }, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setTitle('');
      setDescription('');
      setDueDate('');
      onTaskAdded(); // Callback to refresh employee/task list
    } catch (error) {
      console.error('Error adding task:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: '16px' }}>
      <Typography variant="h6" component="h3" gutterBottom>
        Add Task for Employee
      </Typography>
      <TextField
        fullWidth
        label="Title"
        variant="outlined"
        margin="normal"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <TextField
        fullWidth
        label="Description"
        variant="outlined"
        margin="normal"
        multiline
        rows={2}
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <TextField
        fullWidth
        label="Due Date"
        variant="outlined"
        margin="normal"
        type="date"
        InputLabelProps={{
          shrink: true,
        }}
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
      />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        sx={{ mt: 2 }}
      >
        Add Task
      </Button>
    </form>
  );
}

export default AddTaskForm;
