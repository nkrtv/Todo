import { Snackbar, Alert } from '@mui/material';

const SuccessSnackbar = ({ open, message, onClose }) => {
    return (
      <Snackbar
        open={open}
        autoHideDuration={1000} 
        onClose={onClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }} 
      >
        <Alert onClose={onClose} severity="success" sx={{ width: '100%' }}>
          {message}
        </Alert>
      </Snackbar>
    );
  };

export default SuccessSnackbar;
