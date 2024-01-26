import React, { useState } from "react";
import logo from "../assets/img/logo.jpg";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const [searchTerm, setSearchTerm] = useState("");
  const history = useNavigate();

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
        // If at least one meal is found, navigate to the first one
        const firstMealId = data.meals[0].idMeal;
        history(`/meal/${encodeURIComponent(firstMealId)}`, {
          details: data.meals[0],
        });
      } else {
        console.log("No meals found");
      }
    } catch (error) {
      console.error("Error searching meals by name:", error);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    // Call the searchMealByName function with the current search term
    searchMealByName(searchTerm);
  };

  return (
    <div className="p-3 text-bg-dark mb-5">
      <div className="container">
        <div className="row align-items-center">
          <Link to={"/"}>
            <div className="col">
              <img
                src={logo}
                style={{ width: "60px" }}
                alt="Company Logo"
                className="mx-5"
              />
            </div>
          </Link>
          <div className="col-auto">
            <form onSubmit={handleSearch} className="mb-3 mb-lg-0">
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
