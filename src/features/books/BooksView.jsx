import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteBook } from "./BookSlice";
import { Link } from "react-router-dom";

const BooksView = () => {
  const books = useSelector(state => state.booksReducer.books);
  const dispatch = useDispatch();
  const numberOfBooks = useSelector(state => state.booksReducer.books.length);

  // handle delete button:
  const handleDelete = id => {
    dispatch(deleteBook(id));
  };
  return (
    <div>
      <div className="text-center mt-5 mb-5 shadow-lg p-3 mb-5 bg-warning rounded w-25 mx-auto">
        <h3>List Of Books </h3>
        <h6>Total Books: {numberOfBooks}</h6>

      </div>
      <table className="table container w-50 shadow-lg p-5 mb-5 bg-white rounded">
        <thead>
          <tr>
            {/* <th scope="col">Id</th> */}
            <th scope="col">Title</th>
            <th scope="col">Author</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {books &&
            books.map(book => {
              const { id, title, author } = book;

              return (
                <tr key={book.id}>
                  {/* <td>
                    {id}
                  </td> */}
                  <td>
                    {title}
                  </td>
                  <td>
                    &copy; {author}
                  </td>
                  <div className="m-0 d-flex">
                    <Link to="/edit-book" state={{ id, title, author }}>
                      <td>
                        <button className="btn btn-primary">Edit</button>
                      </td>
                    </Link>
                    <td>
                      <button
                        className="btn btn-danger"
                        onClick={() => handleDelete(id)}
                      >
                        Delete
                      </button>
                    </td>
                  </div>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default BooksView;
