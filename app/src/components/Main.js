import React, { useState } from "react";
import Cart from "./Cart";
import Home from "./Home";
import Navbar from "./Navbar";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./Sidebar";
const Main = () => {
  const [like, setLike] = useState(false);
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="" element={<Home like={like} setLike={setLike} />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>{" "}
      <Sidebar like={like} setLike={setLike} />
    </>
  );
};

export default Main;
