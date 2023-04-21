import React from "react";
import universe from "../src/images/universe.jpg";
import { Link } from "react-router-dom";
const Error = () => {
  return (
    <div>
      <div className="card mx-auto mt-5 " style={{ width: "18rem" }}>
        <img className="card-img-top mb-3" src={universe} alt="Card image cap" />
        <div className="card-body">
          <p className="card-text">You are out of Book Mania Universe </p>
          <Link to="/" className="btn btn-primary w-100">
            Go back to home >>>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Error;
