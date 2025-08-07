import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: [
        { id: 1, text: 'Selesaikan laporan bulanan', completed: false, category: 'kerja' },
        { id: 2, text: 'Kerjakan tugas Aljabar Linear', completed: true, category: 'kuliah' },
        { id: 3, text: 'Beli susu dan roti', completed: false, category: 'pribadi' },
        { id: 4, text: 'Review Pull Request dari tim', completed: false, category: 'kerja' },
    ],
};

const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, action) => {
        const newTodo = {
            id: Date.now(),
        text: action.payload.text,
        completed: false,
        category: action.payload.category,
        };
        state.items.push(newTodo);
        },
        toggleTodo: (state, action) => {
        const todo = state.items.find(t => t.id === action.payload);
        if (todo) {
            todo.completed = !todo.completed;
        }
        },
        deleteTodo: (state, action) => {
        state.items = state.items.filter(t => t.id !== action.payload);
        },
        editTodo: (state, action) => {
        const todo = state.items.find(t => t.id === action.payload.id);
        if (todo) {
            todo.text = action.payload.newText;
        }
        },
    },
});

export const { addTodo, toggleTodo, deleteTodo, editTodo } = todosSlice.actions;
export default todosSlice.reducer;