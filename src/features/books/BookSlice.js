import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initialBooks = {
  books: [
    { id: uuidv4(), title: "Bangladesh", author: "BongoBondhu" },
    { id: uuidv4(), title: "Bangladeshi People", author: "Bangladesh" }
  ]
};

export const bookSlice = createSlice({
  name: "books",
  initialState: initialBooks,
  reducers: {
    showBooks: state => state,
    addBooks: (state, action) => {
      state.books.push(action.payload);
    },
    updateBook: (state, action) => {
      const { id, title, author } = action.payload;
      const isBookExist = state.books.filter(book => book.id === id);
      if (isBookExist) {
        isBookExist[0].title = title;
        isBookExist[0].author = author;
      }
    },
    deleteBook: (state, action) => {
      const id = action.payload;
      state.books = state.books.filter(book => book.id !== id);
    }
  }
});

export const {
  showbooks,
  addBooks,
  deleteBook,
  updateBook
} = bookSlice.actions;
export default bookSlice.reducer;
