import { useContext, useState, memo, useCallback } from 'react';
import { TextField, Stack, Paper } from '@mui/material';
import { StatusPrioritySelect, CustomButton } from '../common';
import { statusOptions, priorityOptions } from '../common/StatusPrioritySelect';
import TodoContext from '../../contexts/Context';
import ThemeContext from '../../contexts/ThemeContext';
import SuccessSnackbar from './SuccessSnackbar'; 

const AddTodo = memo(() => {
  const { addTodo } = useContext(TodoContext);
  const { currentTheme } = useContext(ThemeContext);

  const [taskName, setTaskName] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [status, setStatus] = useState('Pending');
  const [priority, setPriority] = useState('Medium');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [snackbarOpen, setSnackbarOpen] = useState(false); 

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    if (taskName.trim()) {
      addTodo({ taskName, status, priority, taskDescription });
      setTaskName('');
      setTaskDescription('');
      setStatus('Pending');
      setPriority('Medium');
      setErrorMessage('');
      setSuccessMessage('Task added successfully!');
      setSnackbarOpen(true); 
    } else {
      setErrorMessage('Task name is required!');
    }
  }, [taskName, status, priority, taskDescription, addTodo]);

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false); 
    setSuccessMessage(''); 
  };

  return (
    <Paper elevation={3} sx={{
      padding: '20px',
      marginBottom: '20px',
      backgroundColor: currentTheme.palette.background.main,
      borderRadius: '30px'
    }}>
      <Stack component="form" onSubmit={handleSubmit} spacing={2}>
        <TextField label="Task Name" value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          error={!!errorMessage}
          helperText={errorMessage}
        />
        <TextField label="Task Description" value={taskDescription}
          onChange={(e) => setTaskDescription(e.target.value)}
          multiline
          rows={4}
        />
        <StatusPrioritySelect label="Status" value={status}
          onChange={(e) => setStatus(e.target.value)}
          options={statusOptions}
        />
        <StatusPrioritySelect label="Priority" value={priority}
          onChange={(e) => setPriority(e.target.value)}
          options={priorityOptions}
        />
        <CustomButton type="submit">Add Todo</CustomButton>
      </Stack>
      <SuccessSnackbar 
        open={snackbarOpen} 
        message={successMessage} 
        onClose={handleCloseSnackbar} 
      />
    </Paper>
  );
});

export default AddTodo;



