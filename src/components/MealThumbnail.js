import React from "react";

function MealThumbnail({ recipe }) {
  return (
    <div className="d-flex flex-column">
      <img
        src={recipe.strMealThumb}
        className="rounded-circle mt-1 img-fluid m-auto mx-3 my-3"
        alt={recipe.strMeal}
      />
      <p
        className="mx-5 rounded-pill bg-secondary text-white"
        style={{ textAlign: "center" }}
      >
        {recipe.strArea}
      </p>
    </div>
  );
}

export default MealThumbnail;
