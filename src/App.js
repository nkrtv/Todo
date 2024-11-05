import { useContext } from 'react';
import { Container, Typography, Paper, Box, CssBaseline, IconButton } from '@mui/material';
import AssignmentIcon from '@mui/icons-material/Assignment';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import { TodoList, AddTodo } from './components/Todo';
import { Auth } from './components/UserAuth';
import TodoContext from './contexts/Context';
import { useTheme } from './contexts/ThemeContext';

function App() {
  const { userId } = useContext(TodoContext);
  const { currentTheme, toggleTheme } = useTheme();

  return (
    <>
      <CssBaseline />
      <Box sx={{
        backgroundColor: currentTheme.palette.background.app,
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}>
        <Container maxWidth="md" sx={{ padding: { xs: '10px', sm: '20px' } }}>
          <Paper elevation={24} sx={{
            padding: { xs: '20px', sm: '40px' },
            backgroundColor: currentTheme.palette.background.app,
            position: 'relative',
            borderRadius: '30px'
          }}>
            <IconButton
              onClick={toggleTheme}
              sx={{
                position: 'absolute',
                top: '16px',
                right: '16px',
                margin: { xs: '-10px', sm: '10px' },
                color: currentTheme.palette.button.active
              }}
            >
              <LightbulbIcon />
            </IconButton>
            <Typography variant='h1' gutterBottom
              sx={{
                textAlign: 'center',
                display: 'flex',
                marginTop: '25px',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              My Tasks
              <AssignmentIcon sx={{
                marginLeft: 1,
                color: currentTheme.palette.button.active,
                fontSize: '35px'
              }} />
            </Typography>
            <Auth />
            {userId && <AddTodo />}
            <TodoList />
          </Paper>
        </Container>
      </Box>
    </>
  );
}

export default App;























