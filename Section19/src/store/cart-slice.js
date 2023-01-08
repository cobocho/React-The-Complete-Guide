import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantity: 0,
    isChanged: false,
  },
  reducers: {
    addItem: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      state.isChanged = true;
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          title: newItem.title,
        });
      } else {
        existingItem.totalPrice += existingItem.price;
        existingItem.quantity++;
      }
      state.totalQuantity++;
    },
    removeItem: (state, action) => {
      const removeItemId = action.payload.id;
      const removeItem = state.items.find((item) => item.id === removeItemId);
      removeItem.quantity--;
      removeItem.totalPrice -= removeItem.price;
      state.isChanged = true;
      if (removeItem.quantity === 0) {
        const filteredItems = state.items.filter(
          (item) => item.id !== removeItemId
        );
        state.items = filteredItems;
      }
      state.totalQuantity--;
    },
    replaceCart: (state, action) => {
      state.items = action.payload.items;
      state.totalQuantity = action.payload.totalQuantity;
      state.isChanged = false;
    },
  },
});

export const cartReducer = cartSlice.reducer;

export const cartActions = cartSlice.actions;
