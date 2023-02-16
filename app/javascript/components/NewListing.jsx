import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const NewListing = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  // const [user_id, setUserId] = useState();


  const stripHtmlEntities = (str) => {
    return String(str)
      .replace(/\n/g, "<br> <br>")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
  };

  const onChange = (event, setFunction) => {
    setFunction(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const url = "/api/v1/listings/create";
    if (name.length == 0 || location.length == 0 || description.length == 0)
      return;

    const body = {
      name,
      // user_id,
      location,
      description: stripHtmlEntities(description),
    };

    const token = document.querySelector('meta[name="csrf-token"]').content;
    fetch(url, {
      method: "POST",
      headers: {
        "X-CSRF-Token": token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then((response) => navigate(`/listing/${response.id}`))
      .catch((error) => console.log(error.message));
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-sm-12 col-lg-6 offset-lg-3">
          <h1 className="font-weight-normal mb-5">
            Add a new listing to our awesome place in space.
          </h1>
          <form onSubmit={onSubmit}>
            <div className="form-group">
              <label htmlFor="listingName">Listing name</label>
              <input
                type="text"
                name="name"
                id="listingName"
                className="form-control"
                required
                onChange={(event) => onChange(event, setName)}
              />
              {/* <input
                type="hidden"
                name="user_id"
                id="listingName"
                className="form-control"
                required
                onChange={(event) => onChange(event, setUserId)}
              /> */}
            </div>
            <div className="form-group">
              <label htmlFor="listingLocation">Listing location</label>
              <input
                type="text"
                name="location"
                id="listingLocation"
                className="form-control"
                required
                onChange={(event) => onChange(event, setLocation)}
              />
            </div>
            <label htmlFor="listingDescription">Listing description</label>
            <textarea
              className="form-control"
              id="listingDescription"
              name="description"
              rows="5"
              required
              onChange={(event) => onChange(event, setDescription)}
            />
            <button type="submit" className="btn custom-button">
              Create Listing
            </button>
            <Link to="/" className="btn btn-link mt-3">
              Back to listings
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};
export default NewListing;
