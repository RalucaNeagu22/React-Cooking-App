import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import MealCard from "./RandomMealCard";

function RandomSlider({ meals: meals }) {
  return (
    <div className="d-flex align-items-center flex-shrink-1 row">
      <Splide
        options={{
          perPage: 4,
          perMove: 1,
          pagination: false,
          arrows: false,
          drag: "free",
        }}
      >
        {meals.map((recipe) => (
          <SplideSlide key={recipe.idMeal}>
            <MealCard recipe={recipe} />
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
}

export default RandomSlider;
