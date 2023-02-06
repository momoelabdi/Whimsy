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

  // const allListings = listings.map((listing, index) => () => (
    
//   return (
//     <div>
//       {listings.map((listing) => (
//         <div key={listing.id} class="card" style="width: 18rem;">
//           <img src={listing.image} class="card-img-top" alt="..." />
//           <div class="card-body">
//             <h5 class="card-title">{listing.description}</h5>
//             <p class="card-text">{listing.location}</p>
//             <a href="#" class="btn btn-primary">
//               Go somewhere
//             </a>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
};
export default Listing;
