import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  temoignages: JSON.parse(typeof window !== 'undefined' && localStorage.getItem('temoignages')) || [],
};

const temoignageSlice = createSlice({
  name: 'temoignage',
  initialState,
  reducers: {
    addTemoignage: (state, action) => {
      state.temoignages.push(action.payload);
      localStorage.setItem('temoignages', JSON.stringify(state.temoignages));
    },
    editTemoignage: (state, action) => {
      const index = state.temoignages.findIndex(temoignage => temoignage.id === action.payload.id);
      if (index !== -1) {
        state.temoignages[index] = action.payload;
        localStorage.setItem('temoignages', JSON.stringify(state.temoignages));
      }
    },
    setTemoignages: (state, action) => {
      state.temoignages = action.payload;
      localStorage.setItem('temoignages', JSON.stringify(state.temoignages));
    },
  },
});

export const { addTemoignage, editTemoignage, setTemoignages } = temoignageSlice.actions;
export default temoignageSlice.reducer;
