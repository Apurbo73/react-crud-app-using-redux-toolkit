import { configureStore } from "@reduxjs/toolkit";
import booksReducer from "../features/books/BookSlice";

export const Store = configureStore({
  reducer: {
    booksReducer: booksReducer
  }
});
