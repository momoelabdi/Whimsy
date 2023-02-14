import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Listings from "./Listings";
import Logout from "./Logout";




const Home = () => {

  const checkAuthentication = async () => {
    const response = await fetch('/api/v1/session/check', {
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include'
    });
    const data = await response.json();
    console.log( data.isLoggedIn);
  }

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    checkAuthentication().then(isLoggedIn => {
      setIsLoggedIn(isLoggedIn);
    });
  }, []);


  let button;
  if (isLoggedIn) {
    button = <Logout />;
  } else {
    button = <Link to="/login">Login</Link>;
  }

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
              {button}
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
