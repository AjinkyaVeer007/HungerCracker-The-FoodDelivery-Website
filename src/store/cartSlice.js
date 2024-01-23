import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  itemArray: [],
};

const cartSlice = createSlice({
  name: "cart items",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.data.push(action.payload);
      state.itemArray.push(action.payload.id);
    },
    removeCartItem: (state, action) => {
      state.data = state.data.filter((item) => {
        return item.id !== action.payload;
      });
      state.itemArray = state.itemArray.filter((id) => {
        return id !== action.payload;
      });
    },
  },
});

export const { addToCart, removeCartItem } = cartSlice.actions;
export default cartSlice.reducer;
