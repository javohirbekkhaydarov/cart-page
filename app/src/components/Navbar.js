import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import "../App.css"
const Navbar = () => {
  return (
    <>
      <nav>
        <div className="logo">Logo</div>
        <ul>
          <li>
            {" "}
            <Link to="/cart"> Cart </Link>{" "}
          </li>
          <li>
            {" "}
            <AiOutlineShoppingCart />{" "}
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
