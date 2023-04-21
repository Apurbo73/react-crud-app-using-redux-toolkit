import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
        <div className="container-fluid ">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/show-books"
                >
                  Book Mania
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="show-books">
                  Show Books
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="add-book">
                  Add Book
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
{
  /* <nav>
  <Link to="/">Home</Link>
  <Link to="/show-books">Show Books</Link>
  <Link to="/add-book">Add Book</Link>
</nav>; */
}
