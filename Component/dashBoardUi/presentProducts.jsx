import React from "react";
import ProductList from "../ProductList";



export   const PresentProducts = () => {
  return (
    <div>
      <div className="container-fluid  ">
        {/* <h2>Vertical Nav</h2> */}
        <div className="row ">
         <div className="col-sm-2 bg-info ">
        <ul className="nav flex-column">

          <li className="nav-item ">
            <a className="nav-link" href="#">
              Link
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Link
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Link
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" href="#">
              Disabled
            </a>
          </li>
        </ul>
        </div>
        <div className="col-sm-10 bg-dark  pt-5">

    <ProductList/>
        </div>
      </div>
      </div>
    </div>
  );
};

 