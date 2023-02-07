import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import Listings from "../components/Listings";
import Listing from "../components/Listing";

export default (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/listing" element={<Listings />} />
      <Route path="/listing/:id" element={<Listing />} />
    </Routes>
  </Router>
);
