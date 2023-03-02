import React from "react";
import { Link } from "react-router-dom";

const Back = () => {
  return (
    <div className="container text-start">
      <Link to="/">
        <div className="btn btn-primary mt-3">Back</div>
      </Link>
    </div>
  );
};

export default Back;
