import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchTime = createAsyncThunk(
  'time/fetchTime',
  async () => {
    const response = await fetch('https://worldtimeapi.org/api/timezone/Asia/Jakarta');
    if (!response.ok) {
        throw new Error('Gagal mengambil data waktu');
    }
    const data = await response.json();
    return data;
  }
);

const timeSlice = createSlice({
  name: 'time',
  initialState: {
    data: null,
    status: 'idle', 
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTime.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchTime.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchTime.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default timeSlice.reducer;