import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addBooks } from "./BookSlice";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

function AddBooks() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const numberOfBooks = useSelector(state => state.booksReducer.books.length);

  // handle add book submit button:
  const handleSubmit = e => {
    e.preventDefault();
    const book = { id: uuidv4().parseInt(), title, author };
    dispatch(addBooks(book));
    navigate("/show-books");
  };
  return (
    <div>
      <h3 className="mt-5 text-center mb-5 shadow-lg p-3 mb-5 bg-success w-25 mx-auto text-white rounded">
        Add Books
      </h3>

      <form
        onSubmit={handleSubmit}
        className="container mb-5 w-25 shadow-lg p-3 mb-5 bg-white rounded"
      >
        <div className="mb-3 ">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Enter The Title:
          </label>
          <input
            name={title}
            value={title}
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={e => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="mb-3 ">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Author Title:
          </label>
          <input
            name={author}
            value={author}
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={e => setAuthor(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="btn btn-success w-100">
          Submit
        </button>
      </form>
    </div>
  );
}

export default AddBooks;
