import React from "react";
import { Link } from "react-router-dom";

function RandomMealCard({ recipe }) {
  return (
    <div className=" text-center mb-5 py-5 col-12">
      <Link
        to={`/meal/${encodeURIComponent(recipe.idMeal)}`}
        style={{ color: "inherit", textDecoration: "none" }}
      >
        <img
          src={recipe.strMealThumb}
          className="rounded-4 my-3"
          alt={recipe.strMeal}
          style={{ maxHeight: "150px" }}
        />
        <p className="fw-semibold fs-5 text-center">{recipe.strArea}</p>
      </Link>
    </div>
  );
}

export default RandomMealCard;
