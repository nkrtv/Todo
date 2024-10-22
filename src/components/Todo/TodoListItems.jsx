import TodoItem from './TodoItem';

const TodoListItems = ({ todos, onDelete, onOpenDetail }) => {
  return (
    <>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onDelete={onDelete}
          onOpenDetail={onOpenDetail} 
        />
      ))}
    </>
  );
};

export default TodoListItems;
