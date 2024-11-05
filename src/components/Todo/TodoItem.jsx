import { useContext, memo, useCallback } from 'react';
import { Paper, Typography } from '@mui/material';
import DeleteButton from '../common/DeleteButton';
import ThemeContext from '../../contexts/ThemeContext';

const TodoItem = memo(({ todo, onDelete, onOpenDetail }) => {
  const { currentTheme } = useContext(ThemeContext);

  const handleDelete = useCallback(() => {
    onDelete(todo.id);
  }, [onDelete, todo.id]);

  const handleOpenDetail = useCallback(() => {
    onOpenDetail(todo.taskName);
  }, [onOpenDetail, todo.taskName]);

  return (
    <Paper
      sx={{
        borderRadius: '15px', 
        padding: '15px',
        position: 'relative',
        backgroundColor: currentTheme.palette.background.task
      }}
    >
      <DeleteButton todoId={todo.id} tooltipText="Delete task" onClick={handleDelete} />
      <Typography variant='p' onClick={handleOpenDetail} 
        sx={{ cursor: 'pointer', marginRight: '4px'}}>
        {todo.taskName}
      </Typography>
      <Typography variant="body2">
        {`Status: ${todo.status} | Priority: ${todo.priority}`}
      </Typography>
    </Paper>
  );
});

export default TodoItem;





