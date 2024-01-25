import React from "react";

function RandomMealCard({ recipe }) {
  return (
    <div className="text-center mb-5">
      <img
        src={recipe.strMealThumb}
        className="rounded-4 my-3"
        style={{ width: "300px" }}
        alt={recipe.strMeal}
      />
      <p className="fw-semibold fs-4">{recipe.strArea}</p>
    </div>
  );
}

export default RandomMealCard;
