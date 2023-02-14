import React from "react";
import { Link } from "react-router-dom";

export default () => (
  <div>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Whimsy
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarScroll"
          aria-controls="navbarScroll"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarScroll">
          <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
            <li className="nav-item">
              <a
                className="nav-link active"
                aria-current="page"
                href="listings"
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <Link to="/login" className="btn btn-dark  me-2" role="button">
                {" "}
                Login{" "}
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/signUp" className="btn btn-dark" role="button">
                {" "}
                Sign Up{" "}
              </Link>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
    <div className="vw-100 vh-100 primary-color d-flex align-items-center justify-content-center">
      <div className="jumbotron jumbotron-fluid bg-transparent">
        <div className="container secondary-color">
          <h1 className="display-4">Listings</h1>
          <p className="lead">
            A curated list of listings for the best homemade meal and
            delicacies.
          </p>
          <hr className="my-4" />
          <Link to="/listings" className="btn btn-dark" role="button">
            View Listings
          </Link>
        </div>
      </div>
    </div>
  </div>
);
