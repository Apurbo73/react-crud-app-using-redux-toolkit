import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Home";
import Error from "../Error";
import Navbar from "../layouts/Navbar";
import BooksView from "../features/books/BooksView";
import AddBooks from "../features/books/AddBooks";
import Footer from "../layouts/Footer";
import EditBooks from "../features/books/EditBooks";

const RoutePage = () => {
  return (
    <BrowserRouter>
    <Navbar></Navbar>
        <main>
        <Routes>
              <Route path="/show-books" element={<BooksView />}> </Route>
              <Route path="/add-book" element={<AddBooks />}> </Route>
              <Route path="/edit-book" element={<EditBooks></EditBooks>}></Route>
              <Route path="/*" element={<Error/>}> </Route>
            </Routes>
        </main>
        <Footer></Footer>
    </BrowserRouter>
  );
};

export default RoutePage;
