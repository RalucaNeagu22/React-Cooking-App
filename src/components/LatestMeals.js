import React from "react";
import { Link } from "react-router-dom";
import MealThumbnail from "./MealThumbnail";
import MealDetails from "./MealDetails";

function LatestMeals({ meals }) {
  return (
    <div className="row gap-4 mt-5 d-flex justify-content-center mb-5 pb-5">
      <p className="fs-1">Latest meals</p>
      {meals.map((recipe) => (
        <div key={recipe.idMeal} className="col-3">
          <Link
            to={`/meal/${encodeURIComponent(recipe.idMeal)}`}
            style={{ color: "inherit", textDecoration: "none" }}
          >
            <div className="d-flex gap-3">
              <MealThumbnail recipe={recipe} />
              <MealDetails recipe={recipe} />
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default LatestMeals;
