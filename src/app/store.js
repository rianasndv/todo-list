import { configureStore } from '@reduxjs/toolkit';
import todosReducer from '../features/todosSlice';
import filtersReducer from '../features/filtersSlice';
import timeReducer from '../api/timeSlice';

export const store = configureStore({
    reducer: {
        todos: todosReducer,
        filters: filtersReducer,
        time: timeReducer,
    },
});