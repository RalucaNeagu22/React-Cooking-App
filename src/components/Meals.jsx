import React from "react";
import LatestMeals from "./LatestMeals";
import MealSlider from "./RandomSlider";

function Meals({ meals, sliderMeals }) {
  return (
    <div className="container">
      <MealSlider meals={sliderMeals} />
      <LatestMeals meals={meals} />
    </div>
  );
}

export default Meals;