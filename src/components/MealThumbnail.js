import React from "react";

function MealThumbnail({ recipe }) {
  return (
    <div className="d-flex flex-column">
      <img
        src={recipe.strMealThumb}
        className="rounded-circle img-thumbnail mt-1"
        style={{ width: "150px" }}
        alt={recipe.strMeal}
      />
      <p
        className="mx-3 my-2 rounded-pill bg-secondary text-white"
        style={{ textAlign: "center" }}
      >
        {recipe.strArea}
      </p>
    </div>
  );
}

export default MealThumbnail;
