// src/redux/slices/productsSlice.js
import { createSlice } from "@reduxjs/toolkit";
import products from "../../data/data"; 

const productsSlice = createSlice({
  name: "products",
  initialState: {
    items: products 
  },
  reducers: {
    addProduct: (state, action) => {
      state.items.push(action.payload);
    },
    removeProduct: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    }
  }
});

export const { addProduct, removeProduct } = productsSlice.actions;
export default productsSlice.reducer;
