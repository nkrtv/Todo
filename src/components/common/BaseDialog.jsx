import { Dialog, DialogTitle, DialogContent, DialogActions, Paper  , } from '@mui/material';
import { useContext } from 'react';
import ThemeContext from '../../contexts/ThemeContext';

const BaseDialog = ({ open, onClose, title, children, actions }) => {
  const { currentTheme } = useContext(ThemeContext);

  return (
    <Dialog open={open} onClose={onClose}
      PaperProps={{
        sx: {
          borderRadius: '30px',
          overflow: 'auto'
        }
      }}
    >
      <Paper
        sx={{
          backgroundColor: currentTheme.palette.background.main,
          padding: '10px'
        }}
      >
        <DialogTitle>{title}</DialogTitle>
        <DialogContent>{children}</DialogContent>
        <DialogActions>{actions}</DialogActions>
      </Paper>
    </Dialog>
  );
};

export default BaseDialog;






