import { Box, Typography } from '@mui/material';

const LoginReminder = () => {

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Typography variant='p'> 
        Please login to view your tasks.
      </Typography>
    </Box>
  );
};

export default LoginReminder;

