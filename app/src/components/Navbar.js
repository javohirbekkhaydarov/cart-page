import React from "react";
import {Link} from "react-router-dom";
const Navbar = () => {
  return (
    <>
   

      <div className="container">
        <div className="row">
          <div className="col">
            <div className="card">
              <img
                className="card-img-top"
                src="http://www.azspagirls.com/files/2010/09/orange.jpg"
                alt="Card image cap"
              />
              <div className="card-block">
                <h4 className="card-title">Orange</h4>
                <p className="card-text">Price: $0.5</p>
               <Link to="cart">
               <a
                    href="#"
                    data-name="Orange"
                    data-price="0.5"
                    className="add-to-cart btn btn-primary"
                  >
                    Add to cart
                  </a>
               </Link>
                
               
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img
                className="card-img-top"
                src="http://www.azspagirls.com/files/2010/09/orange.jpg"
                alt="Card image cap"
              />
              <div className="card-block">
                <h4 className="card-title">Orange</h4>
                <p className="card-text">Price: $0.5</p>
               <Link to="cart">
               <a
                    href="#"
                    data-name="Orange"
                    data-price="0.5"
                    className="add-to-cart btn btn-primary"
                  >
                    Add to cart
                  </a>
               </Link>
                
               
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img
                className="card-img-top"
                src="http://www.azspagirls.com/files/2010/09/orange.jpg"
                alt="Card image cap"
              />
              <div className="card-block">
                <h4 className="card-title">Orange</h4>
                <p className="card-text">Price: $0.5</p>
               <Link to="cart">
               <a
                    href="#"
                    data-name="Orange"
                    data-price="0.5"
                    className="add-to-cart btn btn-primary"
                  >
                    Add to cart
                  </a>
               </Link>
                
               
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </>
  );
};

export default Navbar;
