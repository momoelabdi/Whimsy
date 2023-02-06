import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Listing = () => {
  const [listings, setListings] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const url = "/api/v1/listings/index";
    fetch(url)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then((response) => setListings(response))
      .catch(() => navigate("/"));
  }, []);

  const allListings = listings.map((listing, index) =>  (
    <div key={index} className="card" style={{width: '18rem'}}>
      <img src={listing.image} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{listing.description}</h5>
        <p className="card-text">{listing.location}</p>
        <Link to={`/listing/${listing.id}`} className="btn custom-button">
          View Listing
        </Link>
      </div>{" "}
    </div>
  ));
  const noListing = (
    <div className="vw-100 vh-50 d-flex align-items-center justify-content-center">
      <h4>
        No listings yet. Why not <Link to="/new_listing">create one</Link>
      </h4>
    </div>
  );

  return (
    <>
      <section className="jumbotron jumbotron-fluid text-center">
        <div className="container py-5">
          <h1 className="display-4">Listing</h1>
          <p className="lead text-muted">
            We’ve pulled together our most popular listings, our latest
            additions, and our editor’s picks, so there’s sure to be something
            tempting for you.
          </p>
        </div>
      </section>
      <div className="py-5">
        <main className="container">
          <div className="text-right mb-3">
            <Link to="/listing" className="btn custom-button">
              Create New Listing
            </Link>
          </div>
          <div className="row">
            {listings.length > 0 ? allListings : noListing}
          </div>
          <Link to="/" className="btn btn-link">
            Home
          </Link>
        </main>
      </div>
    </>
  );
};
export default Listing;
