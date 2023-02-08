import React from "react";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const Listing = () => {
  const [listing, setListing] = useState({ description: "" });
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const url = `/api/v1/show/${params.id}`;
    fetch(url)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then((response) => setListing(response))
      .catch(() => navigate("/"));
  }, [params.id]);
  const addHtmlEntities = (str) => {
    return String(str).replace(/&lt;/g, "<").replace(/&gt;/g, ">");
  };

  const deleteListing = () => {
    const url = `/api/v1/destroy/${params.id}`;
    const token = document.querySelector('meta[name="csrf-token"]').content;
    fetch(url, {
      method: "DELETE",
      headers: {
        "X-CSRF-Token": token,
        "Content-type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then(() => navigate("/listings"))
      .catch((error) => console.log(error.message));
  };

  const descriptionList = () => {
    let descriptionList = "No description available";
    if (listing.description.length > 0) {
      descriptionList = listing.description
        .split(",")
        .map((description, index) => (
          <li key={index} className="list-group-item">
            {description}
          </li>
        ));
    }
    return descriptionList;
  };
  const listingLocatin = addHtmlEntities(listing.location);

  return (
    <div className="">
      <div className="hero position-relative d-flex align-items-center justify-content-center">
        <img
          src={listing.image}
          alt={`${listing.description} image`}
          className="img-fluid position-absolute"
        />
        <div className="overlay bg-dark position-absolute" />
        <h1 className="display-4 position-relative text-white">
          {listing.name}
        </h1>
      </div>
      <div className="container py-5">
        <div className="row">
          <div className="col-sm-12 col-lg-3">
            <ul className="list-group">
              <h5 className="m-b 5">Description</h5>
              {descriptionList()}
            </ul>
          </div>
          <div className="col-sm-12 col-lg-7">
            <h5 className="m-b 5">Location</h5>
            <div
              dangerouslySetInnerHTML={{
                __html: `${listingLocatin}`,
              }}
            />
            <button type="button" className="btn btn-danger" onClick={deleteListing}>
              Delete Listing
            </button>
            <hr />
            <Link to="/" className="btn btn-link">
              Back to listings
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Listing;
