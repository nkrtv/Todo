import { Typography } from '@mui/material';

const EmptyTaskList = () => {

  return (
    <Typography variant='p' sx={{textAlign: 'center'}}> 
      You don't have any tasks yet.
    </Typography>
  );
};

export default EmptyTaskList;

