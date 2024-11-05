import { useState, useContext } from 'react';
import { IconButton, Tooltip } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import ThemeContext from '../../contexts/ThemeContext'; 

const DeleteButton = ({ onClick, tooltipText }) => {
  const [hovered, setHovered] = useState(false);
  const { currentTheme } = useContext(ThemeContext); 

  return (
    <Tooltip title={tooltipText} placement="left">
      <IconButton onClick={onClick}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        sx={{
          position: 'absolute',
          right: 8,
          margin: { xs: '-10px'},
          color: hovered ? currentTheme.palette.button.deleteHover : currentTheme.palette.text.secondary
        }}
      >
        {hovered ? <DeleteOutlineIcon /> : <DeleteIcon />}
      </IconButton>
    </Tooltip>
  );
};

export default DeleteButton;



