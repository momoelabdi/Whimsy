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
      .catch(() => navigate("/listings"));
  }, [params.id]);
  const addHtmlEntities = (str) => {
    return String(str).replace(/&lt;/g, "<").replace(/&gt;/g, ">");
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
};
export default Listing;
