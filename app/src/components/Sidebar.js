import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { minusCount, plusCount, remove, sidebar } from "../stories/CartSlice";
import { FiTrash } from "react-icons/fi";
import "../App.css";
const Sidebar = () => {
  const { cart, total, seelikes} = useSelector((state) => state.cart);

  console.log(cart);
  const dispatch = useDispatch();
  const plusCountHandler = (id) => {
    dispatch(plusCount(id));
  };

  const minusCountHandler = (id) => {
    dispatch(minusCount(id));
  };
  const removeHandler = (id) => {
    dispatch(remove(id));
  };



  return (
    <div className={`sidebar-left ${seelikes ? "sidebar-left-show":""}`}>
      <div className="title">liked cart</div>

      <h1 className="centered"> your card </h1>

      {cart.map((item, index) => (
        <div className="line" key={index}>
          <p className="number"> {item.id} </p>
          <img className="line-img" src={item.image} alt="" />
          <p className="remove">{item.title}</p>
          <div className="count">
            <button
              disabled={item.count < 2}
              className="btn btn-success"
              onClick={() => minusCountHandler(item.id)}
            >
              -
            </button>
            {item.count}
            <button
              className="btn btn-success"
              onClick={() => plusCountHandler(item.id)}
            >
              +
            </button>
          </div>
          <div className="total">${item.price}</div>
          <div
            className="remove btn btn-danger"
            onClick={() => removeHandler(item.id)}
          >
            <FiTrash />
          </div>
        </div>
      ))}

      <h1> totoal price : {total} $ </h1>
    </div>
  );
};

export default Sidebar;
