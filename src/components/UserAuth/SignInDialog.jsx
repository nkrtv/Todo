import { Typography } from '@mui/material';
import BaseDialog from '../common/BaseDialog';
import CustomButton from '../common/CustomButton';
import { signInWithGoogle } from '../../services/authService';

const SignInDialog = ({ open, onClose, setUser }) => {

  return (
    <BaseDialog
      open={open}
      onClose={onClose}
      title={
        <Typography variant="body1" sx={{ marginTop: '8px' }}>
          Sign in to your account
        </Typography>
      }
      actions={
        <>
          <CustomButton variant="text" onClick={onClose}>
            Close
          </CustomButton>
          <CustomButton variant="contained"
            onClick={() => signInWithGoogle(setUser, onClose)}>
            Sign in
          </CustomButton>
        </>
      }
    >
      <Typography variant="body2">
        Please sign in with Google to continue.
      </Typography>
      
    </BaseDialog>
  );
};

export default SignInDialog;


