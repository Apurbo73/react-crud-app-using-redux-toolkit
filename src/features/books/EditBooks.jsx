import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { updateBook } from "./BookSlice";

function EditBooks() {
  const location = useLocation();
  console.log(location);
  const [id, setId] = useState(location.state.id);
  const [title, setTitle] = useState(location.state.title);
  const [author, setAuthor] = useState(location.state.author);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  //handle Update Button:
  const handleUpdateButton = e => {
    e.preventDefault();

    dispatch(updateBook({ id, title, author }));
    navigate("/show-books");
  };

  return (
    <div>
      <h4 className="text-center mt-5 shadow-lg p-3 mb-5 text-white rounded w-25 mx-auto bg-primary">
        Edit Book Information
      </h4>

      <form
        onSubmit={handleUpdateButton}
        className="w-25 mx-auto mt-5 mb-5 shadow-lg p-3 mb-5 bg-white rounded"
      >
        <div className="mb-3 ">
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
        </div>
        <button type="submit" className="btn btn-primary w-100">
          Submit
        </button>
      </form>
    </div>
  );
}

export default EditBooks;
