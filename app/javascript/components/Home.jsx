import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Listings from "./Listings";
import Logout from "./Logout";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  async function checkUserLoggedIn() {
    const response = await fetch("/api/v1/users/check", {
      credentials: "include",
    });
    const data = await response.json();

    setIsLoggedIn(data.isLoggedIn);
  }

  useEffect(() => {
    checkUserLoggedIn();
  }, []);

  const handleLogout = async (event) => {
    event.preventDefault();
    try {
      const token = document.querySelector('meta[name="csrf-token"]').content;
      const response = await fetch("/api/v1/users/sign_out", {
        method: "DELETE",
        headers: {
          "X-CSRF-Token": token,
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        throw new Error("Logout failed");
      }
      console.log("logout successful");
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
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
              {isLoggedIn ? (
                <Link
                  type="button"
                  className="btn custom-button"
                  onClick={handleLogout}
                >
                  {" "}
                  Logout{" "}
                </Link>
              ) : (
                <>
                  <Link type="button" className="btn custom-button" to="/login">
                    Login
                  </Link>
                  <Link
                    type="button"
                    className="btn custom-button"
                    to="/signUp"
                  >
                    Sign Up
                  </Link>
                </>
              )}
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
      <Listings />
    </div>
  );
};
export default Home;
