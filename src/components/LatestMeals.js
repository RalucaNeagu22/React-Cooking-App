import React from "react";
import { Link } from "react-router-dom";
import MealThumbnail from "./MealThumbnail";
import MealDetails from "./MealDetails";

function LatestMeals({ meals, isRandom }) {
  const title = isRandom ? "Latest meals" : "Search results";

  return (
    <div className="gap-4 d-flex flex-column mb-5 pb-5">
      <p className="fs-4 fw-semibold mx-5 px-5">{title}</p>
      <div className="row row-gap-5 gap-5 flex justify-content-center">
        {meals.map((recipe) => (
          <div key={recipe.idMeal} className="col-lg-3 col-md-4">
            <Link
              to={`/meal/${encodeURIComponent(recipe.idMeal)}`}
              style={{ color: "inherit", textDecoration: "none" }}
            >
              <div className="d-flex gap-1">
                <MealThumbnail recipe={recipe} />
                <MealDetails recipe={recipe} />
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LatestMeals;
