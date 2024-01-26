import React from "react";
import { Link } from "react-router-dom";

function RandomMealCard({ recipe }) {
  return (
    <Link to={`/meal/${encodeURIComponent(recipe.idMeal)}`}>
      <div className="text-center mb-5">
        <img
          src={recipe.strMealThumb}
          className="rounded-4 my-3"
          style={{ width: "300px" }}
          alt={recipe.strMeal}
        />
        <p className="fw-semibold fs-4">{recipe.strArea}</p>
      </div>
    </Link>
  );
}

export default RandomMealCard;
