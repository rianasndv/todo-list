import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleTodo, deleteTodo, editTodo } from '../features/todosSlice';

const TodoItem = ({ todo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);
  const dispatch = useDispatch();

  const handleSave = () => {
    if (newText.trim()) {
      dispatch(editTodo({ id: todo.id, newText }));
      setIsEditing(false);
    }
  };
  
  const categoryClass = `category-${todo.category}`;

  return (
    <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => dispatch(toggleTodo(todo.id))}
      />
      {isEditing ? (
        <div className="text-content">
          <input
            type="text"
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
            style={{flexGrow: 1}}
          />
        </div>
      ) : (
        <div className="text-content">
          <span>{todo.text}</span>
          <span className={`category-badge ${categoryClass}`}>{todo.category}</span>
        </div>
      )}

      <div className="actions">
        {isEditing ? (
          <button className="save-button" onClick={handleSave}>Simpan</button>
        ) : (
          <button className="edit-button" onClick={() => setIsEditing(true)}>Edit</button>
        )}
        <button className="delete-button" onClick={() => dispatch(deleteTodo(todo.id))}>Hapus</button>
      </div>
    </li>
  );
};

export default TodoItem;