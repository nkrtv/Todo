import { useState, useContext, useCallback, useMemo } from 'react';
import TodoContext from '../contexts/Context';

const useFilteredTodos = () => {
  const { todos } = useContext(TodoContext);
  const [filters, setFilters] = useState({ status: 'All', priority: 'All' });

  const filteredTodos = useMemo(() => {
    let filtered = todos;

    if (filters.status !== 'All') {
      filtered = filtered.filter(todo => todo.status === filters.status);
    }

    if (filters.priority !== 'All') {
      filtered = filtered.filter(todo => todo.priority === filters.priority);
    }

    return filtered;
  }, [todos, filters]);

  const handleFilterChange = useCallback((newFilters) => {
    setFilters(newFilters);
  }, []);

  return { filteredTodos, handleFilterChange, filters };
};

export default useFilteredTodos;


