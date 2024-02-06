import React from "react";
import LatestMeals from "./LatestMeals";
import MealSlider from "./RandomSlider";

function Meals({ meals, sliderMeals, isRandom }) {
  console.log("rand" + isRandom);
  return (
    <div className="container">
      <MealSlider meals={sliderMeals} />
      <LatestMeals meals={meals} isRandom={isRandom} />
    </div>
  );
}

export default Meals;
