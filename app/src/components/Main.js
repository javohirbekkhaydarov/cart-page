import React from "react";
import Cart from "./Cart";
import Navbar from "./Navbar";
import { Routes, Route } from "react-router-dom";
const Main = () => {
  return (
    <>
      <Routes>
        <Route path="/navbar" element={<Navbar />} />
        <Route path="/cart " element={<Cart />} />
      </Routes>{" "}
      <Cart />
    </>
  );
};

export default Main;
