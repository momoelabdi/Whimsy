import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import Listings from "../components/Listings";
export default (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/listing" element={<Listings />} />
    </Routes>
  </Router>
);
