import React from "react";
import Navbar from "./Navbar";
import FilterBar from "./FilterBar";
import { Link } from "react-router-dom";
import MealCard from "./MealCard";

function MealsListPage({ category, meals }) {
  return (
    <div>
      <Navbar />
      <div className="d-flex">
        <FilterBar />
        <div className="mx-5 d-flex flex-column gap-5">
          <h2 className="fs-1">{category}</h2>
          <div className="row row-gap-5 gap-5">
            {meals ? (
              meals.map((meal) => (
                <div key={meal.idMeal} className="col-lg-2 col-md-4 col-sm-6">
                  <Link
                    to={`/meal/${encodeURIComponent(meal.idMeal)}`}
                    style={{ color: "inherit", textDecoration: "none" }}
                  >
                    <MealCard thumb={meal.strMealThumb} title={meal.strMeal} />
                  </Link>
                </div>
              ))
            ) : (
              <p>No meals found for {category}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MealsListPage;
