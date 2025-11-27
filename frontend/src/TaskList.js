import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Import axios
import { Typography, Box, List, ListItem, ListItemText, ListItemSecondaryAction, IconButton, Paper } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

function TaskList() {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    try {
      const token = localStorage.getItem('token');
      console.log('Attempting to fetch tasks...', { token });
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/tasks`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setTasks(response.data);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const handleDelete = async (id) => {
    try {
      const token = localStorage.getItem('token');
      await axios.delete(`${process.env.REACT_APP_API_URL}/api/tasks/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      fetchTasks(); // Refresh the list after deletion
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h4" component="h2" gutterBottom>
        Tasks
      </Typography>
      <List component={Paper} elevation={3}>
        {tasks.map(task => (
          <ListItem key={task.id} divider>
            <ListItemText
              primary={`${task.title} - ${task.description}`}
              secondary={`Assigned to: ${task.Employee ? task.Employee.name : 'Unassigned'} - Status: ${task.status}`}
            />
            <ListItemSecondaryAction>
              <IconButton edge="end" aria-label="delete" onClick={() => handleDelete(task.id)}>
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}

export default TaskList;
