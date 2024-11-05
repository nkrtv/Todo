import { useContext, useEffect, useState, memo, useCallback } from 'react';
import { Typography, Divider, Stack, Paper } from '@mui/material';
import { StatusPrioritySelect, CustomButton, BaseDialog } from '../common';
import { statusOptions, priorityOptions } from '../common/StatusPrioritySelect';
import TodoContext from '../../contexts/Context';
import ThemeContext from '../../contexts/ThemeContext';


const TodoDetail = memo(({ open, onClose, taskName }) => {
  const { todos, updateTodo } = useContext(TodoContext);
  const { currentTheme } = useContext(ThemeContext);
  const [todo, setTodo] = useState(null);
  const [status, setStatus] = useState('');
  const [priority, setPriority] = useState('');
  const [taskDescription, setTaskDescription] = useState('');

  useEffect(() => {
    const foundTodo = todos.find(todo => todo.taskName === taskName);
    if (foundTodo) {
      setTodo(foundTodo);
      setStatus(foundTodo.status);
      setPriority(foundTodo.priority);
      setTaskDescription(foundTodo.taskDescription);
    }
  }, [taskName, todos]);

  const handleUpdate = useCallback(() => {
    if (todo) {
      const updatedTodo = {
        ...todo,
        status,
        priority,
        taskDescription,
      };
      updateTodo(updatedTodo);
      onClose();
    }
  }, [todo, status, priority, taskDescription, updateTodo, onClose]);

  if (!open || !todo) return null;

  const actions = (
    <>
      <CustomButton variant="text" onClick={onClose}>
        Close
      </CustomButton>
      <CustomButton variant="contained" onClick={handleUpdate}>
        Update Todo
      </CustomButton>
    </>
  );

  return (
    <BaseDialog open={open} onClose={onClose} actions={actions}>
      <Paper sx={{
        backgroundColor: currentTheme.palette.background.task,
        padding: '20px'
      }}>
        <Typography variant='p'> {todo.taskName} </Typography>
        <Typography variant="body2" sx={{ marginTop: '20px' }}>
          {`Description: ${taskDescription}`}
        </Typography>
        <Divider sx={{ margin: '10px 0' }} />
        <Stack spacing={2} sx={{ marginTop: '20px' }}>
          <StatusPrioritySelect label="Status" value={status}
            onChange={(e) => setStatus(e.target.value)}
            options={statusOptions}
          />
          <StatusPrioritySelect label="Priority" value={priority}
            onChange={(e) => setPriority(e.target.value)}
            options={priorityOptions}
          />
        </Stack>
      </Paper>
    </BaseDialog>
  );
});

export default TodoDetail;


