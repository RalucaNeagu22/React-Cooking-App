import React from "react";
import logo from "../assets/img/logo.jpg";

function Navbar() {
  return (
    <div className="p-3 text-bg-dark mb-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col">
            <img
              src={logo}
              style={{ width: "60px" }}
              alt="Company Logo"
              className="mx-5"
            />
          </div>
          <div className="col-auto">
            <form className="mb-3 mb-lg-0">
              <label htmlFor="search" className="visually-hidden">
                Search
              </label>
              <input
                type="search"
                id="search"
                className="form-control form-control-lg form-control-dark text-bg-dark"
                placeholder="Search..."
                aria-label="Search"
                style={{ minWidth: "500px" }}
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
