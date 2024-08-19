import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Works from "../pages/Works";
import Contact from "../pages/Contact";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Route */}
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Works" element={<Works />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
