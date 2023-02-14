import React from "react";
import { Link } from "react-router-dom";

export default () => (
  <div className="vw-100 vh-100 primary-color d-flex align-items-center justify-content-center">
    <div className="jumbotron jumbotron-fluid bg-transparent">
      <div className="container secondary-color">
        <h1 className="display-4">Listings</h1>
        <p className="lead">
          A curated list of listings for the best homemade meal and delicacies.
        </p>
        <hr className="my-4" />
        <Link
          to="/listings"
          className="btn btn-dark"
          role="button"
        >
          View Listings
        </Link>
        <Link to="/login" className="btn btn-dark" role="button"> Login </Link>
        <Link to="/signUp" className="btn btn-dark" role="button"> Sign Up </Link>
      </div>
    </div>
  </div>
);
