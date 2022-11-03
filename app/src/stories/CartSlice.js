import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  arr: [
    {
      id: 0,
      image: "http://www.azspagirls.com/files/2010/09/orange.jpg",
      title: "Orange",
      price: 5,
      count: 1,
    },
    {
      id: 1,
      image: "http://www.azspagirls.com/files/2010/09/orange.jpg",
      title: "Peach",
      price: 10,
      count: 1,
    },
    {
      id: 2,
      image: "http://www.azspagirls.com/files/2010/09/orange.jpg",
      title: "Apricot",
      price: 10,
      count: 1,
    },
  ],
  cart: [],
  total: 0,
};

export const CartSlice = createSlice({
  name: "cart",
  initialState,

  reducers: {
    addToCart: (state, action) => {
      const one = state.cart.find((item) => {
        return item.id === action.payload.id;
      });

      if (!one) {
        state.cart.push(action.payload);
      } else {
        for (let i = 0; i < state.cart.length; i++) {
          if (state.cart[i].id === action.payload.id) {
            state.cart[i].count++;
          }
        }
      }

      for (let i = 0; i < state.cart.length; i++) {
        if (state.cart[i].id === action.payload.id) {
          state.total += state.cart[i].price;
        }
      }
    },

    plusCount: (state, action) => {
      for (let i = 0; i < state.cart.length; i++) {
        if (state.cart[i].id === action.payload) {
          state.cart[i].count++;
          state.total += state.cart[i].price;
        }
      }
    },

    minusCount: (state, action) => {
      for (let i = 0; i < state.cart.length; i++) {
        if (state.cart[i].id === action.payload) {
          state.cart[i].count--;
          state.total -= state.cart[i].price;
        }
      }
    },
    remove: (state, action) => {
      state.cart = state.cart.filter((item) => {
        return item.id !== action.payload;
      });
    },

    sidebar: (state, action) => {},
  },
});

export const { addToCart, plusCount, minusCount, remove } = CartSlice.actions;

export default CartSlice.reducer;
