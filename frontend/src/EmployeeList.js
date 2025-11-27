import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Import axios
import AddTaskForm from './AddTaskForm'; // Import AddTaskForm
import { Typography, Box, List, ListItem, ListItemText, ListItemSecondaryAction, IconButton, Paper } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';

function EmployeeList() {
  const [employees, setEmployees] = useState([]);
  const [addTaskForEmployeeId, setAddTaskForEmployeeId] = useState(null); // New state to manage which employee to add task for

  const fetchEmployees = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/employees`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setEmployees(response.data);
    } catch (error) {
      console.error('Error fetching employees:', error);
    }
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  const handleDelete = async (id) => {
    try {
      const token = localStorage.getItem('token');
      await axios.delete(`${process.env.REACT_APP_API_URL}/api/employees/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      fetchEmployees(); // Refresh the list after deletion
    } catch (error) {
      console.error('Error deleting employee:', error);
    }
  };

  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h4" component="h2" gutterBottom>
        Employees
      </Typography>
      <List component={Paper} elevation={3}>
        {employees.map(employee => (
          <ListItem key={employee.id} divider>
            <ListItemText
              primary={`${employee.name} - ${employee.email}`}
              secondary={`Role: ${employee.role}`}
            />
            <ListItemSecondaryAction>
              <IconButton edge="end" aria-label="add task" onClick={() => setAddTaskForEmployeeId(employee.id)}>
                <AddIcon />
              </IconButton>
              <IconButton edge="end" aria-label="delete" onClick={() => handleDelete(employee.id)}>
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>
            {addTaskForEmployeeId === employee.id && (
              <Box sx={{ width: '100%', mt: 2, p: 2, border: '1px solid #ccc', borderRadius: '5px' }}>
                <AddTaskForm
                  employeeId={employee.id}
                  onTaskAdded={() => {
                    setAddTaskForEmployeeId(null); // Close the form
                    fetchEmployees(); // Refresh the employee list, which now potentially includes tasks
                  }}
                />
              </Box>
            )}
          </ListItem>
        ))}
      </List>
    </Box>
  );
}

export default EmployeeList;
