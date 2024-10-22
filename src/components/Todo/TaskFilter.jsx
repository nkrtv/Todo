import { useCallback, useContext } from 'react';
import { Box, Typography, Stack } from '@mui/material';
import { StatusPrioritySelect, DeleteButton } from '../common';
import { statusOptions, priorityOptions } from '../common/StatusPrioritySelect';
import ThemeContext from '../../contexts/ThemeContext';

const TaskFilter = ({ filters, onFilterChange }) => {
  const { currentTheme } = useContext(ThemeContext);

  const handleStatusChange = useCallback((event) => {
    onFilterChange({ ...filters, status: event.target.value });
  }, [filters, onFilterChange]);

  const handlePriorityChange = useCallback((event) => {
    onFilterChange({ ...filters, priority: event.target.value });
  }, [filters, onFilterChange]);

  const clearFilters = useCallback(() => {
    onFilterChange({ status: 'All', priority: 'All' });
  }, [onFilterChange]);

  return (
    <Box sx={{
      marginBottom: 2, position: 'relative',
      backgroundColor: currentTheme.palette.background.main,
    }}>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography variant='p'>
          Filter your tasks
        </Typography>
        <DeleteButton onClick={clearFilters} tooltipText="Clear all filters" />
      </Stack>
      <Stack direction="row" spacing={2} sx={{ marginTop: 2 }}>
        <StatusPrioritySelect label="Status" value={filters.status}
          onChange={handleStatusChange}
          options={[{ value: 'All', label: 'All' }, ...statusOptions]}
        />
        <StatusPrioritySelect label="Priority" value={filters.priority}
          onChange={handlePriorityChange}
          options={[{ value: 'All', label: 'All' }, ...priorityOptions]}
        />
      </Stack>
    </Box>
  );
};

export default TaskFilter;


















