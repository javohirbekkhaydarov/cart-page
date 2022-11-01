import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import "../App.css";
import { useDispatch, useSelector } from "react-redux";

const Navbar = () => {
  const { cart } = useSelector((state) => state.cart);
  return (
    <>
      <nav>
        <Link to="/" className="logo">Logo</Link>
        <ul>
          <li>
            {" "}
            <Link to="/cart"> Cart </Link>{" "}
          </li>
          <li>
            {" "}
            <AiOutlineShoppingCart />
            <span className="totalprice"> {cart.length} </span>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
