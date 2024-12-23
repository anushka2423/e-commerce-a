import { createSlice } from '@reduxjs/toolkit';

const apiSlice = createSlice({
  name: 'api',
  initialState: {
    apiEndPoint: 'https://fakestoreapi.com/products',
  },
  reducers: {
    setApiEndPoint: (state, action) => {
      state.apiEndPoint = action.payload;
    },
  },
});

export const { setApiEndPoint } = apiSlice.actions;
export default apiSlice.reducer;