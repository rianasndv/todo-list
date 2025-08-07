import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  status: 'all', 
  category: 'all',
  keyword: '',
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setStatusFilter: (state, action) => {
      state.status = action.payload;
    },
    setCategoryFilter: (state, action) => {
      state.category = action.payload;
    },
    setKeywordFilter: (state, action) => {
      state.keyword = action.payload;
    },
  },
});

export const { setStatusFilter, setCategoryFilter, setKeywordFilter } = filtersSlice.actions;
export default filtersSlice.reducer;