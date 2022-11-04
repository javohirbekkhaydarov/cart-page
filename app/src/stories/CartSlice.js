import { createSlice } from "@reduxjs/toolkit";
import { Action } from "@remix-run/router";

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
  like: [],
  total: 0,
  seelikes: false,
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
    },
    likeCart: (state, action) => {
      const heart = state.like.find((item) => {
        return item.id === action.payload.id;
      });

      if (!heart) {
        state.like.push(action.payload);
      } else {
        for (let i = 0; i < state.like.length; i++) {
          if (state.like[i].id === action.payload.id) {
            state.like[i].count++;
          }
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

    showSideBar: (state) => {
      state.seelikes = !state.seelikes;
    },
    removeLikeCartFunc: (state, action) => {
      state.like = state.like.filter((item) => {
        return item.id !== action.payload;
      });
    },
  },
});

export const {
  addToCart,
  plusCount,
  minusCount,
  remove,
  likeCart,
  showSideBar,
  removeLikeCartFunc,
} = CartSlice.actions;

export default CartSlice.reducer;
