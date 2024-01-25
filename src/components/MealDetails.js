import React from "react";

function MealDetails({ recipe }) {
  return (
    <div className="d-flex w-100 align-items-center">
      <p className="fs-6 fw-semibold w-100">{recipe.strMeal}</p>
    </div>
  );
}

export default MealDetails;
