import { Button } from '@mui/material';
import { useContext } from 'react';
import ThemeContext from '../../contexts/ThemeContext';

const CustomButton = ({ children, variant = 'contained', onClick, ...props }) => {
  const { currentTheme } = useContext(ThemeContext);

  return (
    <Button
      variant={variant}
      onClick={onClick}
      sx={{
        marginLeft: '10px',
        borderRadius: '15px',
        ...(variant === 'contained'
          ? { backgroundColor: currentTheme.palette.button.active }
          : { color: currentTheme.palette.button.close }),
      }}
      {...props}
    >
      {children}
    </Button>
  );
};

export default CustomButton;

