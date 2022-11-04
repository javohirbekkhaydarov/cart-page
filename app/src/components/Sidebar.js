import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeLikeCartFunc } from "../stories/CartSlice";
import { FiTrash } from "react-icons/fi";
import "../App.css";
const Sidebar = () => {
  const { like, total, seelikes } = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  const removeHandler = (id) => {
    dispatch(removeLikeCartFunc(id));
  };

  return (
    <div className={`sidebar-left ${seelikes ? "sidebar-left-show" : ""}`}>
      <h1 className="centered"> favourites products </h1>

      {like.map((item, index) => (
        <div className="favourites" key={index}>
          <div className="line">
            <img className="line-img" src={item.image} alt="" />
            <p className="remove">{item.title}</p>
            <div className="total">${item.price}</div>
            <div
              className="remove btn btn-danger"
              onClick={() => removeHandler(item.id)}
            >
              <FiTrash />
            </div>
          </div>
        </div>
      ))}

      <p> totoal price : {total} $ </p>
    </div>
  );
};

export default Sidebar;
