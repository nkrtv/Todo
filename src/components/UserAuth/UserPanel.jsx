import { Box, Avatar, Typography, Paper } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { useContext } from 'react';
import ThemeContext from '../../contexts/ThemeContext';
import CustomButton from '../common/CustomButton';

const UserPanel = ({ user, onSignOut, onSignIn }) => {
  const { currentTheme } = useContext(ThemeContext);

  return (
    <Paper elevation={4}
      sx={{
        padding: '20px',
        marginBottom: '20px',
        display: 'flex',
        justifyContent: "space-between",
        alignItems: 'center',
        backgroundColor: currentTheme.palette.background.main,
        borderRadius: '30px',
      }}
    >
      {user ? (
        <>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Avatar src={user.photoURL} alt={user.displayName} />
            <Typography variant="p"
              sx={{ marginLeft: '10px' }}>
              {user.displayName}
            </Typography>
          </Box>
          <CustomButton variant="contained" endIcon={<ExitToAppIcon />}
            onClick={onSignOut}>
            Exit
          </CustomButton>
        </>
      ) : (
        <Box sx={{ display: 'flex', alignItems: 'center', width: '100%' }}>
          <AccountCircleIcon sx={{
            fontSize: 40, marginRight: '10px',
            color: currentTheme.palette.text.secondary
          }} />
          <Typography variant="body2" sx={{ flexGrow: 1 }}>
            Sign in to your account
          </Typography>
          <CustomButton variant="contained" onClick={onSignIn}>
            Sign in
          </CustomButton>
        </Box>
      )}
    </Paper>
  );
};

export default UserPanel;







