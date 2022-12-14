import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import { useDispatch, useSelector } from "react-redux";
import CartSlice, {
  addToCart,
  likeCart,
  likeIconToggle,
} from "../stories/CartSlice";
import { AiOutlineHeart } from "react-icons/ai";
import "../App.css";

const Home = () => {
  const { arr } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const addToCartHandler = (object) => {
    dispatch(addToCart(object));
  };

  const likeCartHandler = (object) => {
    dispatch(likeCart(object));
  };

  const likeActiveHandler = (id) => {
    dispatch(likeIconToggle(id));
  };
  return (
    <>
      <div className="home">
        <div className="row">
          <div className="col">
            {arr.map((item, index) => {
              return (
                <div className="card" key={index}>
                  <div
                    className={`like-icon `}
                    onClick={() => likeCartHandler(item)}
                  >
                    <AiOutlineHeart
                      onClick={() => likeActiveHandler(item.id)}
                      className={` ${
                        item.likeactiveicon
                          ? "active-like-icon"
                          : ``
                        }`}
                    
                    />
                  </div>
                   
                  <img className="card-img" src={item.image} alt="" />
                  <div className="card-block">
                    <h4 className="card-title"> {item.title} </h4>
                    <p className="card-text">{item.price}</p>
                    <button
                      type="button"
                      onClick={() => addToCartHandler(item)}
                      className="add-to-cart btn btn-primary"
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
