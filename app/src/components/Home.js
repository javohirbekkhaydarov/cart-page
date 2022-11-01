import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <>
    <Navbar />
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="card">
            <img
              className="card-img-top"
              src="http://www.azspagirls.com/files/2010/09/orange.jpg"
              alt=""
            />
            <div className="card-block">
              <h4 className="card-title">Orange</h4>
              <p className="card-text">Price: $0.5</p>
              <Link to="/cart"
              
              data-name="Orange"
              data-price="0.5"
              className="add-to-cart btn btn-primary">
               
                  Add to cart
                
              </Link>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img
              className="card-img-top"
              src="http://www.azspagirls.com/files/2010/09/orange.jpg"
              alt=" "
            />
            <div className="card-block">
              <h4 className="card-title">Orange</h4>
              <p className="card-text">Price: $0.5</p>
              <Link to="/cart"
              
              data-name="Orange"
              data-price="0.5"
              className="add-to-cart btn btn-primary">
               
                  Add to cart
                
              </Link>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img
              className="card-img-top"
              src="http://www.azspagirls.com/files/2010/09/orange.jpg"
              alt=" "
            />
            <div className="card-block">
              <h4 className="card-title">Orange</h4>
              <p className="card-text">Price: $0.5</p>
              <Link to="/cart"
              
              data-name="Orange"
              data-price="0.5"
              className="add-to-cart btn btn-primary">
               
                  Add to cart
                
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Home;
