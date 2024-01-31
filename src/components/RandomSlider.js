import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import MealCard from "./RandomMealCard";

function RandomSlider({ meals: meals }) {
  return (
    <Splide
      options={{
        perPage: 3,
        perMove: 1,
        pagination: false,
        arrows: false,
        drag: "free",
        gap: "3rem",
      }}
    >
      {meals.map((recipe) => (
        <SplideSlide key={recipe.idMeal}>
          <MealCard recipe={recipe} />
        </SplideSlide>
      ))}
    </Splide>
  );
}

export default RandomSlider;
