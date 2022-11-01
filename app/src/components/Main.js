import React from "react";
import Cart from "./Cart";
import Home from "./Home";
import Navbar from "./Navbar";
import { Routes, Route } from "react-router-dom";
const Main = () => {
  return (
    <>
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/navbar" element={<Navbar />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>{" "}
    
    </>
  );
};

export default Main;
