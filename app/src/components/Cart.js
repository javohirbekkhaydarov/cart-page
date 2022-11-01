import React from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
const Cart = () => {
  return (
    <div>
      <Navbar />

      <h1> this is pag Cart Page</h1>
      <div className="container">
        <div className="line ">
          <p className="number"> N 1</p>
          <img
              
              src="http://www.azspagirls.com/files/2010/09/orange.jpg"
              alt=""
            />
            <div className="count">
                - 1 +
            </div>
            <div className="total">
              $100
            </div>
            <div className="remove">
              remove
            </div>
        </div>
      </div>
      <Link to="/" className="btn btn-warning">
        go to home
      </Link>
    </div>
  );
};

export default Cart;
