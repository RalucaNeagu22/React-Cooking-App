import React, { useEffect, useState } from "react";
import LatestMeals from "./LatestMeals";
import RandomSlider from "./RandomSlider";

function RandomMeals({ random }) {
  return (
    <div className="container">
      <RandomSlider random={random} />

      <LatestMeals random={random} />
    </div>
  );
}

export default RandomMeals;
