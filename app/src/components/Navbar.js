import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import "../App.css";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineHeart } from "react-icons/ai";
import { showSideBar } from "../stories/CartSlice";

const Navbar = () => {
  const { cart, like , seelikes } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const likeHandler = () => {
    dispatch(showSideBar())
  };

 
  return (
    <>
      <nav className="nav">
        <Link to="/" className="logo">
          Logo
        </Link>
        <ul>
          <li>
            {" "}
            <Link to="/cart"> Cart </Link>{" "}
          </li>
          <li>
            <div className="cart-icons" onClick={() => likeHandler()  }>
              <AiOutlineHeart />
              <span className="totalprice"> {like.length} </span>
            </div>
            <AiOutlineShoppingCart />
            <span className="totalprice"> {cart.length} </span>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
