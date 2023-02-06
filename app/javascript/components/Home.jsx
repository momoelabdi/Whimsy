import React from "react";
import { Link } from "react-router-dom";
import Listing from "./Listing";

const Home = () => {
  return (
    <div>
      <Listing />
      <Link to="/about">About</Link>
    </div>
  );
};

export default Home;
