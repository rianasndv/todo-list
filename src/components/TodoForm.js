import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/todosSlice';

const TodoForm = () => {
  const [text, setText] = useState('');
  const [category, setCategory] = useState('pribadi');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      dispatch(addTodo({ text, category }));
      setText('');
    }
  };

  return (
    <div className="form-card">
        <h3>Tambah Tugas Baru</h3>
        <form onSubmit={handleSubmit}>
        <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Apa yang perlu dilakukan?"
        />
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="pribadi">Pribadi</option>
            <option value="kerja">Kerja</option>
            <option value="kuliah">Kuliah</option>
        </select>
        <button type="submit">Tambah</button>
        </form>
    </div>
  );
};

export default TodoForm;