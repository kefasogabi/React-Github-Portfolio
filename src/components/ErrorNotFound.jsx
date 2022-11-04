import React from "react";
import { Link } from "react-router-dom";

export default function ErrorNotFound() {
  return (
    <div className="d-flex align-items-center justify-content-center vh-100 bg-dark">
      <div className="text-center">
        <h1 className="display-1 fw-bold text-white">404</h1>
        <p className="fs-3 text-white">
          {" "}
          <span className="text-danger">Opps!</span> Page not found.
        </p>
        <p className="lead text-white">
          The page you’re looking for doesn’t exist.
        </p>
        <Link className="btn btn-primary" to={`/`}>
          Go Home
        </Link>
      </div>
    </div>
  );
}
