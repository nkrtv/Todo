import { useContext, useState, useCallback } from 'react';
import { Stack, Paper } from '@mui/material';
import { TaskFilter, TodoListItems, TodoDetail, EmptyTaskList, LoginReminder } from './';
import useFilteredTodos from '../../hooks/useFilteredTodos';
import TodoContext from '../../contexts/Context';
import { auth } from '../../services/firebase';
import ThemeContext from '../../contexts/ThemeContext';

const TodoList = () => {
  const { removeTodo } = useContext(TodoContext);
  const { filteredTodos, handleFilterChange, filters } = useFilteredTodos();
  const [openDetail, setOpenDetail] = useState(false);
  const [selectedTask, setSelectedTask] = useState('');
  const { currentTheme } = useContext(ThemeContext);

  const toggleDetail = useCallback((taskName) => {
    if (selectedTask === taskName) {
      setOpenDetail(false);
      setSelectedTask('');
    } else {
      setSelectedTask(taskName);
      setOpenDetail(true);
    }
  }, [selectedTask]);

  if (!auth.currentUser) {
    return (<LoginReminder />);
  }

  return (
    <Paper elevation={3}
      sx={{
        padding: '20px',
        marginBottom: '20px',
        borderRadius: '30px',
        backgroundColor: currentTheme.palette.background.main
      }}>
      <TaskFilter filters={filters} onFilterChange={handleFilterChange} />
      <Stack spacing={2}>
        {filteredTodos.length > 0 ? (
          <TodoListItems
            todos={filteredTodos}
            onDelete={removeTodo}
            onOpenDetail={toggleDetail}
          />
        ) : (
          <EmptyTaskList />
        )}
        <TodoDetail open={openDetail} taskName={selectedTask}
          onClose={() => setOpenDetail(false)} />
      </Stack>
    </Paper>
  );
};

export default TodoList;






