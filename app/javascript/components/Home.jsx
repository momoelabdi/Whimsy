import React from "react";
import { Link } from "react-router-dom";
import Listing from "./Listings";

const Home = () => {
  return (
    <div>
      <Listings />
      <Link to="/about">About</Link>
    </div>
  );
};

export default Home;
