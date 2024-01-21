import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categoryId: null,
};
const activeSlice = createSlice({
  name: "active data",
  initialState,
  reducers: {
    handleActive: (state, action) => {
      state[action.payload.name] = action.payload.value;
    },
  },
});

export const { handleActive } = activeSlice.actions;
export default activeSlice.reducer;
