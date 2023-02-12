import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import Listings from "../components/Listings";
import Listing from "../components/Listing";
import NewListing from "../components/NewListing";
import SignUp from "../components/SignUp";


export default (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/listings" element={<Listings />} />
      <Route path="/listing/:id" element={<Listing />} />
      <Route path="/listing" element={<NewListing />} />
      <Route path="/signUp" element={<SignUp />} />
    </Routes>
  </Router>
);
