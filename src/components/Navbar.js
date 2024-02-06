import React, { useState } from "react";
import logo from "../assets/img/logo.jpg";
import { Link } from "react-router-dom";

function Navbar({ setSearchResults }) {
  const [searchTerm, setSearchTerm] = useState("");

  const searchMealByName = async (mealName) => {
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${encodeURIComponent(
          mealName
        )}`
      );

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      const data = await response.json();

      if (data.meals && data.meals.length > 0) {
        setSearchResults(data.meals);
      } else {
        setSearchResults([]);
        console.log("No meals found");
      }
    } catch (error) {
      console.error("Error searching meals by name:", error);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    searchMealByName(searchTerm);
  };

  return (
    <div>
      <div className="p-3 text-bg-dark mb-5">
        <div className="row">
          <div className="col-3 text-center">
            <Link to={"/"}>
              <img src={logo} alt="Company Logo" style={{ width: "50px" }} />
            </Link>
          </div>

          <div className="col-7">
            <form
              onChange={handleSearch}
              onSubmit={handleSearch}
              className="mb-3 mb-lg-0"
            >
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
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
