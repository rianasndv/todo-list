import React from 'react';
import { useSelector } from 'react-redux';
import TodoItem from './TodoItem';

const TodoList = () => {
  const { items: todos } = useSelector((state) => state.todos);
  const filters = useSelector((state) => state.filters);

  const filteredTodos = todos.filter(todo => {
    const statusMatch = (filters.status === 'all') ||
      (filters.status === 'completed' && todo.completed) ||
      (filters.status === 'current' && !todo.completed);

    const categoryMatch = (filters.category === 'all') || (todo.category === filters.category);

    const keywordMatch = todo.text.toLowerCase().includes(filters.keyword.toLowerCase());

    return statusMatch && categoryMatch && keywordMatch;
  });

  return (
    <div className="todo-list-container">
        <h2>Daftar Tugas</h2>
        <ul>
            {filteredTodos.map(todo => (
                <TodoItem key={todo.id} todo={todo} />
            ))}
        </ul>
    </div>
  );
};

export default TodoList;